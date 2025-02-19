import Image from "next/image";

const thinks = [
  {
    title: "Innovation",
    icon: "/icons/innovation.svg",
    image: "./assets/innovation.svg",
    description:
      "We embrace innovation and continually explore emerging technologies and industry trends to develop solutions that push the boundaries of what is possible.",
    link: "innovation",
  },
  {
    title: "Client Success",
    image: "./assets/client-success.svg",
    icon: "/icons/client-succes.svg",
    description:
      "Our clients' success is at the heart of everything we do. We collaborate closely with them, understanding their unique needs and challenges, to deliver tailor-made solutions that drive their business forward.",
    link: "client-success",
  },
  {
    title: "Continuous Learning and Growth",
    image: "./assets/continuous-learning-and-growth.svg",
    icon: "/icons/continuos_learning_and_growth.svg",
    description:
      "We are committed to delivering exceptional quality in all our deliverables. Our team of skilled professionals follows industry best practices and rigorous quality standards to ensure the highest level of performance, reliability, and security.",
    link: "continuous-learning-and-growth",
  },
  {
    title: "Quality and Excellence",
    image: "./assets/quality-excellence.svg",
    icon: "/icons/quality_excellence.svg",
    description:
      "We foster a culture of continuous learning and growth, empowering our team members to expand their skills and stay up-to-date with the latest advancements in technology. This enables us to offer cutting-edge solutions that address the evolving needs of our clients.",
    link: "quality-excellence",
  },
  {
    title: "Ethical Practices",
    image: "./assets/ethical-practices.svg",
    icon: "/icons/ethical_practices.svg",
    description:
      "We conduct our business with integrity, transparency, and ethical practices. We prioritize the privacy and security of our clients' data and adhere to industry regulations and standards.",
    link: "ethical-practices",
  },
  {
    title: "Design Thinking",
    image: "./assets/design-thinking.svg",
    icon: "/icons/design_thinking.svg",
    description:
      "We leverage the power of design thinking to transform challenges into opportunities. In a rapidly evolving digital landscape, we understand that the key to success lies in crafting solutions that truly resonate with users.",
    link: "design-thinking",
  },
];

export default function Think() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, auto)",
      }}
    >
      {thinks.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 350,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
            //   justifyContent: "center",
              //   alignItems: "center",
              flexDirection: "column",
              padding: 60,
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <div>
                <Image src={item.icon} alt="Beaters" width={50} height={60} />
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                {item.title}
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 200,
                color: "#ffffffbd",
              }}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
