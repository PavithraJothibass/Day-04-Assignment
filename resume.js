const resume = {
  name: "Pavithra J",
  email: "pavithrajothi2002@gmail.com",
  phone: "9842009691",
  summary: "A passionate software developer with expertise in MERN stack and web development.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "TailwindCSS"
  ],
  experience: [
    {
      jobTitle: "Software Developer",
      company: "Tech Solutions Inc.",
      years: 2
    },
    {
      jobTitle: "Frontend Developer",
      company: "Web Dev Co.",
      years: 1
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "State University",
    graduationYear: 2022
  }
};

// Using a regular for loop
console.log("Using for loop:");
for (let i = 0; i < resume.skills.length; i++) {
  console.log(resume.skills[i]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resume) {
  console.log(`${key}: ${resume[key]}`);
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let skill of resume.skills) {
  console.log(skill);
}

// Using forEach loop
console.log("\nUsing forEach loop:");
resume.experience.forEach((job) => {
  console.log(`${job.jobTitle} at ${job.company} for ${job.years} years`);
});
