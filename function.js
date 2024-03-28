document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons
    const buttons = document.querySelectorAll('.buttons');
    
    // Loop through each button
    buttons.forEach(button => {
        // Select corresponding elements within each question
        const iconPlus = button.querySelector('.plus');
        const iconMinus = button.querySelector('.minus');
        const content = button.nextElementSibling;
        
        // Add click event listener to each button
        button.addEventListener('click', function () {
            // Toggle 'active' class on the button
            this.classList.toggle('active');
            
            // Toggle visibility of icons
            iconPlus.classList.toggle('hidden');
            iconMinus.classList.toggle('hidden');
            
            // Toggle max-height to show/hide content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                
                iconPlus.style.display = 'block';
                iconMinus.style.display = 'none';
                
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                iconPlus.style.display = 'none';
                iconMinus.style.display = 'block';
            }
        });
    });
});
