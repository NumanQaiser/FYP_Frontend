import React from 'react';

const Guidelines = () => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            margin: '0',
            padding: '20px',
            backgroundColor: '#f4f4f4',
        },
        heading: {
            color: '#333',
        },
        paragraph: {
            marginBottom: '20px',
        },
        code: {
            backgroundColor: '#eef',
            padding: '2px 4px',
            borderRadius: '4px',
        },
        pre: {
            backgroundColor: '#eef',
            padding: '10px',
            borderRadius: '4px',
            overflowX: 'auto',
        },
        list: {
            marginBottom: '20px',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Guidelines for Writing Custom Vulnerability Scanning Scripts</h1>

            <h2 style={styles.heading}>Understanding the Basics</h2>
            <p style={styles.paragraph}>
                Before diving into writing custom scripts, it's crucial to have a solid understanding of common web vulnerabilities and the types of attacks that exploit them. Key vulnerabilities to study include:
            </p>
            <ul style={styles.list}>
                <li>SQL Injection: Exploiting improper handling of user input in SQL queries, allowing attackers to manipulate the database.</li>
                <li>Cross-Site Scripting (XSS): Injecting malicious scripts into web pages viewed by other users, often to steal session cookies or deface websites.</li>
                <li>Cross-Site Request Forgery (CSRF): Forcing a user to execute unwanted actions on a web application where they are authenticated.</li>
                <li>File Inclusion Vulnerabilities: Including remote or local files through improperly sanitized input, leading to arbitrary code execution.</li>
                <li>Remote Code Execution (RCE): Executing arbitrary code on a server due to flaws in input handling or application logic.</li>
                <li>Directory Traversal: Accessing files and directories outside the intended scope by manipulating file path inputs.</li>
            </ul>

            <h2 style={styles.heading}>Choosing a Scripting Language</h2>
            <p style={styles.paragraph}>
                Selecting the right scripting language is crucial for developing effective and maintainable vulnerability scanning scripts. Popular choices include:
            </p>
            <ul style={styles.list}>
                <li>Python: Widely used in cybersecurity for its readability, extensive libraries, and strong community support. Libraries like <code style={styles.code}>requests</code> and <code style={styles.code}>BeautifulSoup</code> are invaluable.</li>
                <li>Bash: Excellent for scripting in Unix-based systems, especially for automating tasks and combining multiple security tools.</li>
                <li>Perl: Known for its text processing capabilities, useful for parsing and analyzing data.</li>
                <li>Ruby: With libraries like Metasploit, it's a good choice for security scripting and penetration testing.</li>
            </ul>

          

            <h2 style={styles.heading}>Script Structure</h2>
            <p style={styles.paragraph}>
                A well-organized script is easier to read, debug, and maintain. A typical script structure includes:
            </p>
            <ul style={styles.list}>
                <li>Imports and Configuration: Import necessary libraries and set up any configuration variables.</li>
                <li>Functions: Define reusable functions for common tasks like making HTTP requests or parsing HTML.</li>
                <li>Main Logic: Implement the core functionality of your script, orchestrating the scanning and analysis process.</li>
                <li>Output and Reporting: Format and present the results in a clear and user-friendly manner.</li>
            </ul>

            <h2 style={styles.heading}>Handling User Input</h2>
            <p style={styles.paragraph}>
                User input must be validated and sanitized to prevent injection attacks. When accepting URLs or other data, ensure they conform to expected formats and handle potential malicious inputs appropriately.
            </p>

            <h2 style={styles.heading}>Making HTTP Requests</h2>
            <p style={styles.paragraph}>
                Use libraries like <code style={styles.code}>requests</code> in Python to perform HTTP requests. Ensure you handle different types of requests (GET, POST) and manage exceptions to maintain script stability.
            </p>

            <h2 style={styles.heading}>Parsing HTML and Searching for Vulnerabilities</h2>
            <p style={styles.paragraph}>
                HTML parsing libraries like BeautifulSoup enable you to analyze web pages and search for vulnerability patterns. For example, you can identify forms without CSRF tokens or input fields without proper validation.
            </p>

            <h2 style={styles.heading}>Reporting Results</h2>
            <p style={styles.paragraph}>
                Effective reporting is crucial for communicating findings. Present the results in a clear, concise manner, whether through console output, files, or HTML reports. Ensure the format is easily understandable by users.
            </p>

            <h2 style={styles.heading}>Testing and Debugging</h2>
            <p style={styles.paragraph}>
                Thoroughly test your script with various URLs and edge cases to ensure robustness. Use debugging techniques to identify and fix issues, and handle exceptions gracefully to prevent crashes.
            </p>

            <h2 style={styles.heading}>Keeping Your Script Updated</h2>
            <p style={styles.paragraph}>
                Cybersecurity is a dynamic field with constantly evolving threats. Regularly update your scripts to incorporate the latest vulnerability patterns and mitigation techniques. Stay informed about new vulnerabilities and security best practices to ensure your scripts remain effective.
            </p>
            <p style={styles.paragraph}>
                By adhering to these detailed guidelines, you can develop robust and reliable custom scripts for vulnerability scanning, helping to enhance web application security and mitigate potential threats.
            </p>
        </div>
    );
};

export default Guidelines;
