'use client';

import { useEffect, useState } from 'react';

type Comment = {
    id: number;
    page: string;
    name: string;
    message: string;
    date: string;
};

type PageCommentsProps = {
    pagePath: string;
};

export default function PageComments({ pagePath }: PageCommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notice, setNotice] = useState('');

    useEffect(() => {
        let isMounted = true;

        const loadComments = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/comments?page=${encodeURIComponent(pagePath)}`, {
                    cache: 'no-store',
                });
                if (!res.ok) throw new Error('Unable to load comments');
                const data = await res.json();
                if (isMounted) setComments(data);
            } catch {
                if (isMounted) setNotice('Comments could not be loaded right now.');
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadComments();

        return () => {
            isMounted = false;
        };
    }, [pagePath]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNotice('');

        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage) {
            setNotice('Please add your name and comment.');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    page: pagePath,
                    name: trimmedName,
                    message: trimmedMessage,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || 'Unable to post comment');

            setComments((current) => [data, ...current]);
            setName('');
            setMessage('');
            setNotice('Thanks. Your comment is now visible on this page.');
        } catch {
            setNotice('Your comment could not be posted right now. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-[1000px] mx-auto px-4 py-16">
            <div className="bg-[#fcfaf8] border border-[#1A3D17]/10 rounded-[2rem] p-6 md:p-10 shadow-sm">
                <div className="mb-8">
                    <span className="inline-flex bg-[#CCEE18] text-[#1A3D17] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                        Reader Discussion
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-[#1A3D17] uppercase tracking-tighter">
                        Comments on This Page
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 font-bold mt-3 max-w-2xl">
                        Share your experience or question about this exact page. Comments shown here are submitted by readers for this page only.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor={`comment-name-${pagePath}`} className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                                Name
                            </label>
                            <input
                                id={`comment-name-${pagePath}`}
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                maxLength={60}
                                className="w-full rounded-2xl bg-white border border-gray-200 px-4 py-3 text-sm font-bold outline-none focus:border-[#CCEE18]"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor={`comment-message-${pagePath}`} className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                                Comment
                            </label>
                            <textarea
                                id={`comment-message-${pagePath}`}
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                maxLength={1000}
                                rows={3}
                                className="w-full rounded-2xl bg-white border border-gray-200 px-4 py-3 text-sm font-bold outline-none focus:border-[#CCEE18] resize-none"
                                placeholder="Write a helpful comment for readers..."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                        <p className="text-xs text-gray-500 font-bold">
                            Be respectful. HTML is removed automatically.
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#1A3D17] hover:bg-[#cc0000] text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-full transition-colors disabled:opacity-60"
                        >
                            {isSubmitting ? 'Posting...' : 'Post Comment'}
                        </button>
                    </div>
                </form>

                {notice && (
                    <div className="mb-6 rounded-2xl bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-[#1A3D17]">
                        {notice}
                    </div>
                )}

                <div className="space-y-4">
                    {isLoading ? (
                        <div className="rounded-2xl bg-white border border-gray-100 p-6 text-sm font-bold text-gray-500">
                            Loading comments...
                        </div>
                    ) : comments.length === 0 ? (
                        <div className="rounded-2xl bg-white border border-gray-100 p-6 text-sm font-bold text-gray-500">
                            No comments yet. Be the first reader to comment on this page.
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <article key={comment.id} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                    <h3 className="text-sm font-black uppercase text-[#1A3D17]">{comment.name}</h3>
                                    <time className="text-[10px] font-black uppercase tracking-widest text-gray-400" dateTime={comment.date}>
                                        {new Date(comment.date).toLocaleDateString()}
                                    </time>
                                </div>
                                <p className="text-sm text-gray-700 font-bold leading-relaxed whitespace-pre-wrap">{comment.message}</p>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
