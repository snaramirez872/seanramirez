import './css/footer.css';
export function Footer() {
    return (
        <section className="footer">
            <footer>&copy; {new Date().getFullYear()} Sean A. Ramirez. All content and code are my own unless otherwise stated.</footer>
        </section>
    );
}