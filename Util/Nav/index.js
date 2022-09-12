import Logo from "../../Asset/log.png";
import { FaSearch } from "react-icons/fa";
import SearchField from "../../Universal-Components/SearchFieldComponent";
import { FiMenu } from "react-icons/fi";

export const NavArray = [
  {
    classmain: "firstLayout",
    section: [
      {
        image: Logo,
        // text: "SALEM INFO TECH",
        classbody: "firstlayoutbody",
        classname: "firstlayoutname",
        classitem: "firstlayoutitem",
      },
    ],
  },
  {
    classmain: "secondLayout",
    section: [
      {
        link: "/",
        linktext: "HOME",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        dropdown: "COMPANY",
        details: "service",
        classbody: "secondlayoutbodydropdown",
        classname: "secondlayoutnamedropdown",
        classitem: "secondlayoutitemdropdown",
        itemL: "itemdropdown",
        dropdownlinks: [
          {
            link: "/case",
            linktext: "Cases",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about",
            linktext: "About",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
        ],
      },
      {
        dropdown: "SERVICES",
        details: "service",
        classbody: "secondlayoutbodydropdown",
        classname: "secondlayoutnamedropdown",
        classitem: "secondlayoutitemdropdown",
        itemL: "itemdropdown",
        dropdownlinks: [
          {
            link: "/services/itconsultation",
            linktext: "IT Consultation",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/outstaffing",
            linktext: "OutStaffing",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/outsourcing",
            linktext: "OutSourcing",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/softwareservices",
            linktext: "Software Services",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
        ],
      },
      {
        link: "/projects",
        linktext: "CAREERS",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        link: "/contacts",
        linktext: "CONTACTS",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        icon: FaSearch,
        details: "searchicon",
        classbody: "thirdlayoutbody",
        classname: "thirdlayoutname",
        classitem: "thirdlayoutitem",
      },
      {
        component: SearchField,
        details: "iconsfield",
        classbody: "fourlayoutbody",
        classname: "fourlayoutname",
        classitem: "fourlayoutitem",
      },
    ],
  },
  {
    classmain: "thirdLayout",
    section: [
      {
        icon: FiMenu,
        details: "hambuggger",
        classbody: "thirdlayoutbody",
        classname: "thirdlayoutname",
        classitem: "thirdlayoutitem",
      },
    ],
  },
];
