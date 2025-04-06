export const Techwall = () => {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    "https://rustacean.net/assets/cuddlyferris.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  ];
  return (
    <div className="relative overflow-hidden flex">
      <div className="flex shrink-0 justify-around min-w-full animate-marquee">
        {icons.map((icon, i) => (
          <img key={i} src={icon} className="h-10 w-10 mr-1" alt="tech-icon" />
        ))}
      </div>
      <div className="flex shrink-0 justify-around min-w-full animate-marquee">
        {icons.map((icon, i) => (
          <img key={i} src={icon} className="h-10 w-10 mr-1" alt="tech-icon" />
        ))}
      </div>
    </div>
  );
};
