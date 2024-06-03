
export const headerContent = {
    "Strict-Transport-Security": {
        url: "https://scotthelme.co.uk/hsts-the-missing-link-in-tls/",
        heading: "HTTP Strict Transport Security",
        content: " is an excellent feature to support on your site and strengthens your implementation of TLS by getting the User Agent to enforce the use of HTTPS. Recommended value Strict-Transport-Security: max-age=31536000; includeSubDomains."
    },
    "Content-Security-Policy": {
        url: "https://scotthelme.co.uk/content-security-policy-an-introduction/",
        heading: "Content Security Policy",
        content: " is an effective measure to protect your site from XSS attacks. By whitelisting sources of approved content, you can prevent the browser from loading malicious assets.",
    },
    "X-Frame-Options": {
        url: "https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options",
        heading: "X-Frame-Options",
        content: "tells the browser whether you want to allow your site to be framed or not. By preventing a browser from framing your site you can defend against attacks like clickjacking. Recommended value X-Frame-Options: SAMEORIGIN",
    },
    "X-Content-Type-Options": {
        url: "https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options",
        heading: "X-Content-Type-Options",
        content: "stops a browser from trying to MIME-sniff the content type and forces it to stick with the declared content-type. The only valid value for this header is X-Content-Type-Options: nosniff"
    },
    "Referrer-Policy": {
        url: "https://scotthelme.co.uk/a-new-security-header-referrer-policy/",
        heading: "Referrer Policy",
        content: " is a new header that allows a site to control how much information the browser includes with navigations away from a document and should be set by all sites.",
    },
    "Permissions-Policy": {
        url: "https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy/",
        heading: "Permissions-Policy",
        content: "is a new header that allows a site to control which features and APIs can be used in the browser"
    }
}


