<script>
    import { Phone, Mail, Github, Linkedin } from 'lucide-svelte';
  </script>
  
  <style>
    .contact-container {
      display: flex;
      flex-direction: column;
      align-items: left;
      padding: 2rem;
      font-family: var(--font-sans); /* Use Manrope as the primary font */
      color: var(--text-1); /* Text color */
    }
  
    .contact-item {
      display: flex;
      align-items: left;
      margin: 1rem 0;
      font-size: 1.2rem;
    }
  
    .contact-item a {
      text-decoration: none;  
      color: inherit;
      display: flex; 
      align-items: left; 
    }

    h1{
      color: var(--brand);
    }
  
  </style>
  
  <section class="contact-container">
    <h1>Contact Me</h1>
    <p>If you have any questions, feel free to reach out through any of the following platforms:</p>
  
    <div class="contact-item">
      <Github style="color: green; margin-right: 8px;" />   


      <a href="https://github.com/2001kg" target="_blank" rel="noopener noreferrer">  github.com/2001kg</a>
    </div>
  
    <div class="contact-item">
      <Linkedin style="color:cornflowerblue; margin-right: 8px;"/>     


      <a href="https://www.linkedin.com/in/thekushalgaikwad/" target="_blank" rel="noopener noreferrer">  linkedin.com/in/thekushalgaikwad</a>
    </div>
  </section>
  