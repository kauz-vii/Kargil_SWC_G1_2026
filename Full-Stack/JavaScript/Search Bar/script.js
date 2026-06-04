const data = [
    "React",
    "Angular",
    "Vue",
    "Svelte",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Django",
    "Flask",
    "Spring Boot",
    "Git",
    "GitHub",
    "GitLab",
    "Linux",
    "Ubuntu",
    "Windows",
    "MacOS",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Blockchain",
    "REST API",
    "GraphQL",
    "Firebase",
    "Supabase"
];

const input = document.getElementById("in");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    const str = input.value.toLowerCase();

    output.innerHTML = "";

    if (str === "") return;

    const matches = data.filter(word =>
        word.toLowerCase().includes(str)
    );

    matches.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;

        li.addEventListener("click", () => {
            input.value = word;
            output.innerHTML = "";
        });

        output.appendChild(li);
    });
});