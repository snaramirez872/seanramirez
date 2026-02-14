import './css/footer.css';
export function Footer() {
    return (
        <div className="footer">
            <footer>&copy; {new Date().getFullYear()} Sean A. Ramirez. All content and code are my own unless otherwise stated.</footer>
        </div>
    );
}