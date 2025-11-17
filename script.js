// Request Demo Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.getElementById('demoForm');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                institution: document.getElementById('institution').value,
                role: document.getElementById('role').value,
                message: document.getElementById('message').value
            };
            
            // Log form data (in production, this would send to a server)
            console.log('Demo Request Submitted:', formData);
            
            // Hide form and show success message
            demoForm.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            
            // In a real application, you would send this data to a server
            // Example:
            // fetch('/api/demo-request', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });
        });
    }
});
