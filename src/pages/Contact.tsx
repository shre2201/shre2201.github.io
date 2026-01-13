export default function Contact() {
    return (
        <div className="pt-24 min-h-screen px-4 container mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <form className="space-y-4">
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 p-3 rounded focus:outline-none focus:border-primary transition-colors" />
                <textarea placeholder="Message" rows={5} className="w-full bg-white/5 border border-white/10 p-3 rounded focus:outline-none focus:border-primary transition-colors"></textarea>
                <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all">Send Message</button>
            </form>
        </div>
    );
}
