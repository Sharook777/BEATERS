import Image from "next/image";
import Link from "next/link";

import HomeText from "@/components/HomeText";
import OurServices from "@/components/OurServices";
import Think from "@/components/Think";

export default function Home() {
  return (
    <div>
      <div
        style={{
          background: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/assets/home.png")`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "100px 50px 50px 50px",
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
              maxWidth: "70%",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Managed Services
            </div>
            <div
              style={{
                fontSize: "40px",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              Lorem Ipsum is simply dummy text
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            {/* <div
              style={{
                marginTop: 20,
                marginBottom: 20,
                gap: 20,
                display: "flex",
              }}
            >
              <Link
                href="/knowmore"
                style={{
                  color: "#FFFFFF",
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 400,
                  border: "1px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                Know More
                <Image
                  src="{`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/expand.svg"
                  alt="icon"
                  width={15}
                  height={20}
                />
              </Link>
              <Link
                href="/newsandinsights"
                style={{
                  background: "#2284C8",
                  color: "#FFFFFF",
                  margin: "0 10px",
                  padding: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                Connect with Us
                <Image
                  src="{`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/messages.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "25px",
                fontWeight: 100,
                textAlign: "left",
              }}
            >
              We think{" "}
            </span>
            <HomeText />
          </div>
        </div>
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/home-2.png`}
            alt="Beaters"
            width={400}
            height={60}
            style={{
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      <div
        style={{
          background: "#000C17",
          display: "flex",
        }}
      >
        <div
          style={{
            padding: "50px 100px 50px 50px",
            color: "#fff",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
            }}
          >
            <div>OUR</div>
            <div>SERVICES</div>
          </div>
          <div
            style={{
              width: "50%",
              height: 3,
              background: "#fff",
            }}
          />
          <div
            style={{
              fontSize: 15,
              fontWeight: 200,
            }}
          >
            Our mission is to provide innovative and cutting-edge solutions in
            the mobile app, software development, and maintenance and support
            domains. We strive to deliver high-quality products and services
            that exceed our client`s expectations, empowering them to achieve
            their business goals and stay ahead in the ever-evolving
            technological landscape.
          </div>
        </div>
        <div
          style={{
            background: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/home2.svg')`,
            padding: "50px 50px 50px 50px",
            color: "#fff",
            flex: 1,
          }}
        >
          <OurServices />
        </div>
      </div>
      <div
        style={{
          background: "#00070D",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: 40,
            fontWeight: 500,
            padding: "50px 10px",
            textAlign: "center",
          }}
        >
          HOW WE THINK
        </div>
        <div>
          <Think />
        </div>
      </div>
    </div>
  );
}
