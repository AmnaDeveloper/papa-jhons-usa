import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, message, topic } = data;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Example Nodemailer or Sendgrid call would go here
        console.log(`Processing contact form submission from: ${name} (${email}) for ${topic}`);
        console.log(`Message: ${message}`);

        return NextResponse.json({
            success: true,
            message: 'Your message has been received successfully. We will get back to you shortly.',
        });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit contact form. Please try again later.' },
            { status: 500 }
        );
    }
}
