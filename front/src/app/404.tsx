import Link from 'next/link';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#f8d7da', color: '#721c24' }}>
            <h1 style={{ fontSize: '48px' }}>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist or may have been moved.</p>
            <Link href="/">
                <a style={{ color: '#007bff', textDecoration: 'none' }}>Go back to Home</a>
            </Link>
        </div>
    );
};

export default NotFound;
