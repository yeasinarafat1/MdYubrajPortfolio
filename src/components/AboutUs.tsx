import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  const socialIcons = [
    {
      name: "Facebook",
      icon: FaFacebook,
      hoverColor: "group-hover:bg-[#1877f2]",
      url: "https://www.facebook.com/md.yubraj.77"
    },
    // {
    //   name: "Twitter",
    //   icon: FaTwitter,
    //   hoverColor: "group-hover:bg-[#1da1f2]",
    //   url: "https://twitter.com"
    // },
    {
      name: "Instagram",
      icon: FaInstagram,
      hoverColor: "group-hover:bg-[#e4405f]",
      url: "https://www.instagram.com/mdyubraj_/"
    }
  ];

  return (
    <ul id="social-media" className="inline-flex list-none h-60 w-full pt-10 justify-center font-poppins">
      {socialIcons.map(({ name, icon: Icon, hoverColor, url }) => (
        <li
          key={name}
          className="relative group"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative flex items-center justify-center
              w-12 h-12 mx-2.5
              bg-white rounded-full
              shadow-[0_10px_10px_rgba(0,0,0,0.1)]
              cursor-pointer
              transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
              ${hoverColor} group-hover:text-white
            `}
          >
            <Icon size={40} />
          <span className={`
            absolute -top-[60px] left-1/2 -translate-x-1/2
            text-sm bg-white
            px-2 py-1.5
            rounded
            shadow-[0_10px_10px_rgba(0,0,0,0.1)]
            opacity-0 invisible
            transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
            group-hover:opacity-100 group-hover:visible group-hover:-top-[45px]
            ${hoverColor} group-hover:text-white
            before:content-['']
            before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2
            before:w-2 before:h-2 before:bg-white
            before:rotate-45
            before:transition-all before:duration-300 before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
            group-hover:before:${hoverColor.replace('hover:', '')}
          `}>
            {name}
          </span>
          </a>
          
          {/* Tooltip */}
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;