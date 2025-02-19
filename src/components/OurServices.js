import Image from "next/image";
import Link from "next/link";

const ourServices = [
  {
    title: "Mobile App Development",
    icon: "/icons/mobile-design.svg",
    description:
      "We have expertise in developing user-friendly and visually appealing mobile applications for both iOS and Android platforms.",
    link: "mobile-app-development",
  },
  {
    title: "Web App Development",
    icon: "/icons/web-app.svg",
    description:
      "We specialize in crafting dynamic and scalable web applications tailored to meet your unique business requirements and we provide end-to-end solutions.",
    link: "web-app-development",
  },
  {
    title: "Web Design",
    icon: "/icons/web-design.svg",
    description:
      "We believe that a visually stunning and user-friendly website is the gateway to success in the online realm. Our experts blend creativity with usability to craft exceptional websites.",
    link: "web-design",
  },
  {
    title: "Software Development",
    icon: "/icons/software-development.svg",
    description:
      "We emphasize clean code architecture, efficient database design, and rigorous testing to ensure the reliability and performance of the software.",
    link: "software-development",
  },
  {
    title: "Maintenance and Support",
    icon: "/icons/maintenance-support.svg",
    description:
      "Our technical support team is available to assist clients with any queries or concerns, ensuring uninterrupted functionality and minimizing any potential downtime.",
    link: "maintenance-and-support",
  },
];

export default function OurServices() {
  return (
    <div
      style={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, auto)",
        marginLeft: -100,
      }}
    >
      {ourServices.map((item) => (
        <Link
          key={item.title}
          href={`/service/${item.link}`}
          style={{
            height: "100%",
          }}
        >
          <div
            style={{
              background: "#135891",
              padding: 20,
              borderRadius: 5,
              display: "flex",
              gap: 30,
              flexDirection: "column",
              cursor: "pointer",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                flex: 1,
                flexDirection: "column",
              }}
            >
              <div>
                <Image src={item.icon} alt="Beaters" width={30} height={60} />
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 200,
                }}
              >
                {item.description}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 200,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                Know more
                <div>
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="Beaters"
                    width={10}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
