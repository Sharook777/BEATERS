import Image from "next/image";
import Link from "next/link";

import OurServices from "@/components/OurServices";
import Think from "@/components/Think";

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          background: 'url("/assets/home.png")',
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
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: "40px",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              WHO WE ARE !?
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 500,
                // lineHeight: "80px",
                textAlign: "left",
                color: "#32BDFE",
              }}
            >
              Our Mission
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              Our mission is to provide innovative and cutting-edge solutions in
              the mobile app, software development, and maintenance and support
              domains. We strive to deliver high-quality products and services
              that exceed our client`s expectations, empowering them to achieve
              their business goals and stay ahead in the ever-evolving
              technological landscape.
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 500,
                // lineHeight: "80px",
                textAlign: "left",
                color: "#32BDFE",
              }}
            >
              Our Vision
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              Our vision is to be a leading provider of mobile app, algorithm
              trading, software development, and maintenance and support
              services globally. We aim to foster long-term partnerships with
              our clients, enabling them to leverage the power of technology for
              growth, efficiency, and competitive advantage. We aspire to be
              recognized for our expertise, reliability, and commitment to
              excellence.
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/about-us.svg"
            alt="Beaters"
            width={500}
            height={60}
            style={{
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          background: "#00070D",
          padding: "50px 50px 50px 50px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "40px",
              color: "#FFFFFF",
            }}
          >
            OFFICE LOCATIONS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <div
              style={{
                padding: "15px",
                gap: 20,
                width: "400px",
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{}}>
                <img
                  src="/assets/office-1.svg"
                  alt="office 1"
                  style={{
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFFFFF",
                }}
              >
                Palakkad, Kerala - IN
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/assets/map-icon.svg"
                      alt="Beaters"
                      width={10}
                      height={40}
                      style={{
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "10px",
                      color: "#32BDFE",
                    }}
                  >
                    10.784660, 76.653817
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Image
            src="/assets/office-locations-banner.svg"
            alt="Beaters"
            width={300}
            height={40}
            style={{
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          background: "#00070D",
          padding: "50px 50px 50px 50px",
          background: 'url("/assets/careers-bg.svg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "40px",
              color: "#FFFFFF",
            }}
          >
            CAREERS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 15,
            }}
          >
            <div
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: 400,
                background: "#00070D",
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Sr. Project Manager
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/experience-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  2+ Year Experience
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/location-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Kerala, IN
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/user-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Open for 5 Resources
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <div
                  style={{
                    border: "1px solid #32BDFE",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#32BDFE",
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                  }}
                >
                  Apply
                  <Image
                    src="/assets/send-arrow-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: 400,
                background: "#00070D",
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Moile App Developer
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/experience-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  0 - 2 Year Experience
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/location-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Kerala, IN
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/user-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 300,
                    fontSize: 12,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Open for 5 Resources
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <div
                  style={{
                    border: "1px solid #32BDFE",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#32BDFE",
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                  }}
                >
                  Apply
                  <Image
                    src="/assets/send-arrow-icon.svg"
                    alt="Beaters"
                    width={15}
                    height={40}
                    style={{
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
