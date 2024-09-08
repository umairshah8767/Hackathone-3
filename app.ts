const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Fetching values from form
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const school = (document.getElementById('school') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const skill = (document.getElementById('skill') as HTMLInputElement).value;

  // Displaying the generated resume
  const resumeSection = document.getElementById('resume-section')!;
  resumeSection.innerHTML = `
    <h2>${name}'s Resume</h2>
    <p><strong>Email:</strong> ${email}</p>
    <h3>Education</h3>
    <p>${degree} from ${school}</p>
    <h3>Work Experience</h3>
    <p>${jobTitle} at ${company}</p>
    <h3>Skills</h3>
    <p>${skill}</p>
  `;
});
