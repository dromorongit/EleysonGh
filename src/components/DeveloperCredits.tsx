import Image from "next/image";

export function DeveloperCredits() {
  return (
    <a
      href="https://www.dromornarh.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="block pt-8 text-center group"
    >
      <div className="flex justify-center mb-2">
        <Image
          src="/images/dhronetechlogo.jpg"
          alt="DhroneTech Solutions"
          width={40}
          height={40}
          className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <p className="text-white/60 text-xs tracking-wider group-hover:text-white/80 transition-colors duration-300">
        Developed by Dromor Narh for DhroneTech Solutions
      </p>
    </a>
  );
}
