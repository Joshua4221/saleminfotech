import Image from "../../Asset/log.png";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaArrowRight } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export const FooterArray = [
  {
    classmain: "firstlayout",
    classname: "firstlayoutname",
    section: [
      {
        image: Image,
        imageText: "SLEM INFO TECH",
        text: "No. 4 Efab City Estate Life-Camp Abuja FCT, Nigeria.",
        classbody: "firstClassbody",
        classname: "firstClassname",
        classitem: "firstClassitem",
        classnameimage: "firstClassnameimage",
        classnametext: "firstClassnametext",
        linkarray: [
          {
            linkIcon: BsTwitter,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: BsInstagram,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: FaFacebookF,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
          {
            linkIcon: BsLinkedin,
            link: "",
            classbody: "linkbody",
            classname: "linkclass",
            classlinkicon: "linkicon",
          },
        ],
        classlinkbody: "firstClasslinkbody",
      },
      {
        header: "Usefull Links",
        classbody: "secondClassbody",
        classname: "secondClassname",
        classlinkbody: "secondClasslinkbody",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "/case",
            linkText: "Cases",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "/about",
            linkText: "About us",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "/contact",
            linkText: "Contact",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          // {
          //   linkIcon: FiChevronRight,
          //   link: "",
          //   linkText: "Term",
          //   classbody: "linkbodyText",
          //   classname: "linkclassText",
          //   classlinkicon: "linkiconText",
          //   classicon: "iconlink",
          //   classitem: "linktextText",
          // },
        ],
      },
      {
        header: "Company",
        classbody: "secondClassbody",
        classname: "secondClassname",
        classlinkbody: "secondClasslinkbody",
        linkarray: [
          {
            linkIcon: FiChevronRight,
            link: "/services/itconsultation",
            linkText: "IT Consultation",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "/services/outstaffing",
            linkText: "OutStaffing",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "/services/outsourcing",
            linkText: "OutSourcing",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
          {
            linkIcon: FiChevronRight,
            link: "/services/softwareservices",
            linkText: "Software Service",
            classbody: "linkbodyText",
            classname: "linkclassText",
            classlinkicon: "linkiconText",
            classicon: "iconlink",
            classitem: "linktextText",
          },
        ],
      },
      {
        header: "",
        classbody: "thirdClassbody",
        classname: "thirdClassname",
        text: "Ready To Create a unique experience? Let's get in touch",
        classitem: "thirdClassitem",
        button: "",
        buttontext: "Start a Project",
        buttonicon: FaArrowRight,

        form: [
          {
            label: "Write your email *",
            type: "email",
            name: "question",
            icons: HiOutlineMail,
            placeholder: "Subject:",
            classbody: "inputbody",
            classname: "input",
          },
          {
            type: "submit",
            value: "Subscribe",
            classbody: "submitbody",
            classname: "submit",
          },
        ],
      },
    ],
  },
  {
    classmain: "secondlayout",
    classname: "secondlayoutname",
    text: "Salem Info Tech © 2022.| All Rights Reserved.",
  },
];
