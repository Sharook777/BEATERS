import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const tabItems = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    image: "./assets/mobile-app-development.svg",
    description: `Our mobile app development services focus on creating customized solutions that meet our clients' specific needs. We have expertise in developing user-friendly and visually appealing mobile applications for both iOS and Android platforms. Our team works closely with clients to understand their requirements and design intuitive interfaces that provide an exceptional user experience. We leverage the latest tools, technologies, and frameworks to develop feature-rich apps that can include functionalities such as social media integration, payment gateways, geolocation services, push notifications, and more.`,
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    image: "./assets/web-app-development.svg",
    description: `We specialize in crafting dynamic and scalable web applications tailored to meet your unique business requirements. Our skilled team of developers utilizes the latest technologies and frameworks to create robust and intuitive web apps that enhance user engagement and drive growth. Whether you need a custom web app from scratch or want to revamp your existing one, we provide end-to-end solutions, including strategic planning, seamless integration, rigorous testing, and ongoing maintenance`,
  },
  {
    id: "web-design",
    title: "Web Design ",
    image: "./assets/web-design.svg",
    description: `We believe that a visually stunning and user-friendly website is the gateway to success in the online realm. Our experts blend creativity with usability to craft exceptional websites that leave a lasting impression on your visitors. By meticulously understanding your brand identity, target audience, and business goals, we deliver tailor-made designs that align with your vision. From responsive layouts to intuitive navigation, we prioritize user experience to ensure seamless interaction across devices.`,
  },
  {
    id: "software-development",
    title: "Software Development",
    image: "./assets/software-development.svg",
    description: `Our software development services cover the entire software development life cycle. We work closely with clients to understand their business objectives and conceptualize software solutions that align with their specific requirements. Our team of skilled developers utilizes industry best practices and the latest technologies to build scalable, robust, and secure software applications. We emphasize clean code architecture, efficient database design, and rigorous testing to ensure the reliability and performance of the software. From front-end development to back-end integration, we offer end-to-end software development services that deliver high-quality solutions.`,
  },
  {
    id: "maintenance-and-support",
    title: "Maintenance and Support",
    image: "./assets/maintenance-and-support.svg",
    description: `We understand the importance of ongoing maintenance and support for the smooth operation of applications and software systems. Our maintenance and support services are designed to address any issues that arise after the development phase. We provide bug fixing, regular updates, version upgrades, and security patches to keep the software up-to-date and secure. Our technical support team is available to assist clients with any queries or concerns, ensuring uninterrupted functionality and minimizing any potential downtime. We prioritize prompt response times and efficient issue resolution to provide our clients with reliable and dependable support services.`,
  },
];

export async function generateStaticParams() {
  const services = [
    { id: "mobile-app-development" },
    { id: "web-app-development" },
    { id: "web-design" },
    { id: "software-development" },
    { id: "maintenance-and-support" },
  ];

  return services.map((service) => ({
    id: service.id,
  }));
}

export default function Details({ params }) {
  const { id } = use(params);

  const currentItem = tabItems?.find((tab) => tab.id === id);

  if (!currentItem) {
    notFound();
  }

  return (
    <div>
      <div
        style={{
          background: 'url("./assets/home.png")',
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "100px 50px 50px 50px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 15,
            alignItems: "flex-start",
            width: "100%",
            paddingTop: 30,
          }}
        >
          {tabItems.map((tab) => (
            <Link key={tab.id} href={`/service/${tab.id}`}>
              <div
                style={{
                  color: "#FFFFFFB2",
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  border: "1px solid #FFFFFFB2",
                  fontWeight: 400,
                  borderRadius: 8,
                  cursor: "pointer",
                  ...(id === tab.id && {
                    color: "#FFFFFF",
                    background: "#2284C8",
                    borderColor: "#2284C8",
                  }),
                }}
              >
                {tab.title}
              </div>
            </Link>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              height: "100%",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "30px 0",
                gap: 10,
              }}
            >
              <div
                style={{
                  fontSize: "35px",
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                {currentItem?.title}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 300,
                  lineHeight: "30px",
                  textAlign: "left",
                  color: "#FFFFFFB2",
                }}
              >
                {currentItem?.description}
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "50%",
            }}
          >
            <Image
              src={currentItem?.image}
              alt="Beaters"
              width={500}
              height={60}
              style={{
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
