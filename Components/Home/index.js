import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { HomeDiv } from "./home.style";
import HeroImage from "../../Asset/main-banner.png";
import { withTheme } from "styled-components";
import { Bg } from "../../Asset/wave-partner.svg";
import HeadingSection from "../../Universal-Components/HeadingSection";
import C_Cards from "../../Universal-Components/C_Cards";
import { AboutArray } from "../../Util/Home/aboutArray";
import { parternsArrayIcon } from "../../Util/Home/partner";
import { DeveloperArray } from "../../Util/Home/developer";
import { dataArray, developedProject } from "../../Util/Home/solutions";
import { TechnologyArray } from "../../Util/Home/technology";
import { ClientProjectsArray } from "../../Util/Home/clientProject";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HomePage = ({ theme, companyArray }) => {
  let lengthCount = TechnologyArray.length - 1;
  let newArr = TechnologyArray.slice(0, 12);
  let lastArr = TechnologyArray.slice(12, TechnologyArray.length);

  const techArr = useMemo(() => [newArr, lastArr], [newArr, lastArr]);

  // let newArr = TechnologyArray.slice(0, 12);
  //   let lastArr = TechnologyArray.slice(12, TechnologyArray.length);

  //   techArr = [newArr, lastArr];

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1024px)").matches
  ) {
    const arr1 = TechnologyArray.slice(0, 4);
    const arr2 = TechnologyArray.slice(4, 8);
    const arr3 = TechnologyArray.slice(8, 12);
    const arr4 = TechnologyArray.slice(12, 16);
    const arr5 = TechnologyArray.slice(16, 20);
    const arr6 = TechnologyArray.slice(20, TechnologyArray.length);

    techArr = [arr1, arr2, arr3, arr4, arr5, arr6];
  }

  const [index, setIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);

  const [details, setDetails] = useState(developedProject[0]);
  const [technologies, setTechnologies] = useState(techArr[0]);
  const [clientIndex, setClientIndex] = useState(0);

  const timeoutRef = useRef(null);
  const timeoutRefTech = useRef(null);
  // const timeoutRef = useRef(null);

  let timeIntervals = 5000;

  const Slider = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === dataArray.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const TechSlider = useCallback(() => {
    setTechIndex((prevTech) =>
      prevTech === techArr.length - 1 ? 0 : prevTech + 1
    );
    setTechnologies(techArr[techIndex]);
  }, [techIndex, techArr]);

  const ClientSlider = useCallback(() => {
    setClientIndex((prevIndex) =>
      prevIndex === dataArray.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const ClentSliderReducer = useCallback(() => {
    setClientIndex((prevIndex) =>
      prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1
    );
  }, [index]);

  const SliderReducer = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1
    );
  }, [index]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(Slider, timeIntervals);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const resetTimeoutTech = () => {
    if (timeoutRefTech.current) {
      clearTimeout(timeoutRefTech.current);
    }
  };

  useEffect(() => {
    resetTimeoutTech();
    timeoutRefTech.current = setTimeout(TechSlider, timeIntervals);

    return () => {
      resetTimeoutTech();
    };
  }, [techIndex]);

  return (
    <HomeDiv color={theme} Bg={Bg}>
      <div className="heroSection">
        <div className={"heroSectionDetails"}>
          <div className={"heroSectionDetailsbdy"}>
            <div className={"heroSectionDetailsbdyheader"}>
              <h3>Hire Experienced Senior IT Experts in 24 hrs</h3>
              <p>
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
            </div>

            <div className={"heroSectionDetailsbdyfooter"}>
              <div className={"heroSectionDetailsbdyfooterheader"}>
                <button>Hire top IT experts</button>
              </div>
              <div className={"heroSectionDetailsbdyfootercontent"}>
                <p>Featured In</p>
                {companyArray?.map((item, key) => (
                  <div
                    key={key}
                    className={"heroSectionDetailsbdyfootercontenticon"}
                  >
                    <Image
                      src={item.image}
                      alt={""}
                      placeholder={"blur"}
                      blurDataURL
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"heroSectionGraphics"}>
          <div>
            <Image
              src={HeroImage}
              alt={""}
              layout={"responsive"}
              placeholder={"blur"}
              blurDataURL
              priority
              objectFit="cover"
              className={"graphicsImage"}
            />
          </div>
        </div>
      </div>
      <div className={"homebody"}>
        <div className={"aboutSection"}>
          <HeadingSection
            title={"About us"}
            paragraph={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div>
            <C_Cards ccardArray={AboutArray} />
          </div>
        </div>

        <div className={"partners"}>
          <HeadingSection
            title={"Partners"}
            paragraph={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div className={"partnersbody"}>
            <div className={"partnersbodyOne"}>
              <p>
                Together with our partners, we shape the future of digital
                entertainment.
              </p>
            </div>
            <div className={"partnersbodyTwo"}>
              {parternsArrayIcon?.map((item, key) => (
                <div key={key} className={"partnersbodyTwoIcon"}>
                  <Image
                    src={item.image}
                    alt={""}
                    placeholder={"blur"}
                    blurDataURL
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"developer"}>
          <HeadingSection
            subtitle={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div>
            <C_Cards ccardArray={DeveloperArray} />
          </div>
        </div>
        <div className={"websolution"}>
          <HeadingSection
            subtitle={
              "High-quality web/mobile development solutions that are crucial for innovative app"
            }
          />
          <div className={"webSolutionIncreament"}>
            {dataArray.map((item, key) => (
              <div
                key={key}
                onClick={() => setIndex(key)}
                className={`data ${index === key && "dataColor"}`}
              ></div>
            ))}
          </div>
          <div className={"solution"}>
            {dataArray?.map((item, key) => (
              <div key={key} className={"solutiondata"}>
                <div className={"solutionnum"}>
                  <p>{item.num}</p>
                </div>
                <div className={"solutiontitle"}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={"developedProjectbody"}>
            {developedProject?.map((item, key) => (
              <div key={key}>
                {index === key && (
                  <div className={"developedProjectbodydata"}>
                    <div className={"developedProjectbodydataimage"}>
                      <div className={"developedProjectbodydataimagedata"}>
                        <Image
                          src={item.image}
                          alt={""}
                          layout={"responsive"}
                          placeholder={"blur"}
                          blurDataURL
                          priority
                          objectFit="cover"
                          className={"graphicsImage"}
                        />
                      </div>
                    </div>
                    <div className={"developedProjectbodydatadetails"}>
                      <p className={"details"}>{item.title}</p>
                      <p className={"detailspar"}>{item.paragraph}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={"technology"}>
          <HeadingSection
            title={"Technologies"}
            paragraph={
              "Plavno provides you with motivated and experienced remote Senior IT Experts. With our business model, you have options to choose the solution that best fits your need."
            }
          />
          <div>
            <C_Cards ccardArray={technologies} details={"technology"} />
            <div className="techControlerbody">
              {techArr?.map((item, key) => (
                <div
                  onClick={() => {
                    setTechIndex(key);
                    setTechnologies(
                      techArr[key === 0 ? techArr.length - 1 : key - 1]
                    );
                  }}
                  className={`techControlerMain ${
                    techIndex === key && "techControler"
                  }`}
                  key={key}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="clientProject">
          <HeadingSection title={"Our Clients Projects"} />
          <div className="clientProjectBody">
            <div>
              <div>
                <FaAngleLeft />
              </div>
              <div></div>
            </div>
            {ClientProjectsArray?.map((item, key) => (
              <div key={key}>
                {clientIndex === key && (
                  <div className="clientBody">
                    <div className="clientText">
                      <C_Cards
                        ccardArray={item.CCardArray}
                        projects="project"
                      />
                    </div>
                    <div className="clientImage">
                      <Image
                        src={item.image}
                        alt=""
                        placeholder="blur"
                        priority
                        blurDataURL
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeDiv>
  );
};

export default withTheme(HomePage);
