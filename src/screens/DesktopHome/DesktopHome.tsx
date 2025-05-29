import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const MOCK_USER = {
  firstName: 'John',
  lastName: 'Doe',
  street: '123 Main St',
  apt: '4B',
  state: 'CA',
  zip: '90001',
};

export const DesktopHome = (): JSX.Element => {
  const navigate = useNavigate();
  // Size options data
  const sizeOptions = [
    { id: 1, label: "XS" },
    { id: 2, label: "S" },
    { id: 3, label: "M", selected: true },
    { id: 4, label: "L" },
    { id: 5, label: "XL" },
  ];

  // Product images data
  const productImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-12.png",
      alt: "Frame",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-11.png",
      alt: "Frame",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-13.png",
      alt: "Frame",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-3.png",
      alt: "Frame",
      className: "w-[883px] h-[489px]",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-18-2.png",
      alt: "Frame",
      className: "w-[424px] h-[489px]",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-18.png",
      alt: "Frame",
      className: "w-[424px] h-[397px]",
    },
    {
      id: 4,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-18-1.png",
      alt: "Frame",
      className: "w-[424px] h-[397px]",
    },
    {
      id: 5,
      src: "https://c.animaapp.com/mb91ufd8UrIPIa/img/frame-19.png",
      alt: "Frame",
      className: "w-[424px] h-[397px]",
    },
  ];

  // Footer navigation links
  const footerLinks = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Buy" },
    { id: 4, label: "Our Customers" },
    { id: 5, label: "Contacts" },
  ];

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] overflow-hidden w-[1440px] h-[5336px] relative">
        {/* Hero Section */}
        <img
          className="absolute w-[383px] h-[129px] top-[197px] left-11"
          alt="Hero header"
          src="https://c.animaapp.com/mb91ufd8UrIPIa/img/hero-header.png"
        />

        <img
          className="absolute w-[1339px] h-[530px] top-[353px] left-[50px]"
          alt="Hero"
          src="https://c.animaapp.com/mb91ufd8UrIPIa/img/hero-mp4.png"
        />

        <div className="absolute w-[53px] h-[18px] top-[309px] left-[1339px] flex items-center">
          <div className="w-[11px] h-[11px] bg-[url(https://c.animaapp.com/mb91ufd8UrIPIa/img/group.png)] bg-[100%_100%] mr-2" />
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[14.6px] tracking-[-0.29px]">
            2025
          </span>
        </div>

        {/* Philosophy Section */}
        <div className="absolute w-[800px] top-[1066px] left-[50px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-normal">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </div>

        <div className="absolute w-[312px] h-[41px] top-[1320px] left-[50px] flex items-center">
          <div className="relative">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e3e3e3] text-2xl tracking-[-0.48px]">
              Learn more about Eclypse
            </div>
            <Separator className="w-[301px] mt-2 bg-[#e3e3e3]" />
          </div>
          <ArrowRightIcon className="w-[39px] h-[39px] ml-auto text-white" />
        </div>

        {/* Gallery Section */}
        <div className="absolute top-[1510px] left-[50px]">
          <img
            className={galleryImages[0].className}
            alt={galleryImages[0].alt}
            src={galleryImages[0].src}
          />
        </div>

        <div className="absolute top-[1510px] left-[964px]">
          <img
            className={galleryImages[1].className}
            alt={galleryImages[1].alt}
            src={galleryImages[1].src}
          />
        </div>

        <div className="absolute top-[2027px] left-[50px]">
          <img
            className={galleryImages[2].className}
            alt={galleryImages[2].alt}
            src={galleryImages[2].src}
          />
        </div>

        <div className="absolute top-[2027px] left-[509px]">
          <img
            className={galleryImages[3].className}
            alt={galleryImages[3].alt}
            src={galleryImages[3].src}
          />
        </div>

        <div className="absolute top-[2027px] left-[964px]">
          <img
            className={galleryImages[4].className}
            alt={galleryImages[4].alt}
            src={galleryImages[4].src}
          />
        </div>

        {/* Product Title */}
        <div className="absolute w-[800px] top-[2607px] left-[43px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-normal">
          Silhouette No. 1 – Vermilion
        </div>

        {/* Product Section */}
        <div className="absolute w-[1440px] h-[912px] top-[2850px] -left-px bg-[#f6f6f6]">
          <div className="absolute w-[539px] top-[53px] left-[736px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-black text-[15px] tracking-[-0.30px] leading-normal">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </div>

          {/* Product Images */}
          <div className="absolute top-[153px] left-[736px] flex gap-6">
            {productImages.map((image) => (
              <Card
                key={image.id}
                className="w-52 h-[199px] rounded-none border-none overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-full object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="absolute w-[654px] top-[401px] left-[736px]" />

          {/* Price Section */}
          <div className="absolute top-[455px] left-[736px] flex flex-col">
            <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#111111] text-4xl tracking-[-0.72px]">
              ₹ 7,999
            </div>
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#767676] text-[15px] tracking-[-0.30px] ml-[128px]">
              MRP incl. of all taxes
            </div>
          </div>

          {/* Size Selection */}
          <div className="absolute top-[537px] left-[736px] flex items-center">
            <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-xl tracking-[-0.40px]">
              Please select a size
            </div>
            <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#767676] text-[15px] tracking-[-0.30px] underline ml-[197px]">
              Size chart
            </div>
          </div>

          <div className="absolute top-[604px] left-[736px] flex gap-[32px]">
            {sizeOptions.map((size) => (
              <Button
                key={size.id}
                variant="outline"
                className={`w-[82px] h-[49px] rounded flex items-center justify-center bg-[#d9d9d9] border-none ${
                  size.selected
                    ? "bg-[#d9d9d9] text-[#f6f6f6]"
                    : "bg-[#d9d9d9] text-[#767676]"
                }`}
              >
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[15px] tracking-[-0.30px]">
                  {size.label}
                </span>
              </Button>
            ))}
          </div>

          <Separator className="absolute w-[654px] top-[706px] left-[736px]" />

          {/* Action Buttons */}
          <div className="absolute top-[792px] left-[736px] flex gap-8">
            <Button
              variant="outline"
              className="w-[196px] h-[66px] rounded-[8.71px] border-2 border-solid border-[#c2c2c2]"
            >
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#0d0d0d] text-[19.3px] tracking-[-0.39px]">
                Add to Cart
              </span>
            </Button>

            <Button className="w-[428px] h-[66px] bg-black rounded-[8.71px]" onClick={() => navigate(`/shipping-address/1`, { state: { user: MOCK_USER } })}>
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[19.3px] tracking-[-0.39px]">
                Buy
              </span>
            </Button>
          </div>

          {/* Product Image */}
          <img
            className="absolute w-[703px] h-[912px] top-0 left-px object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mb91ufd8UrIPIa/img/rectangle-2.png"
          />
        </div>

        {/* Accordion Section */}
        <div className="absolute w-[1342px] h-[348px] top-[3941px] left-[50px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="py-6 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                Size &amp; Fit
              </AccordionTrigger>
              <AccordionContent>
                {/* Content for Size & Fit */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="py-6 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                Delivery &amp; Returns
              </AccordionTrigger>
              <AccordionContent>
                {/* Content for Delivery & Returns */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="py-6 [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px]">
                How This Was Made
              </AccordionTrigger>
              <AccordionContent>
                {/* Content for How This Was Made */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Separator className="absolute w-[1342px] top-[4329px] left-[50px]" />

        {/* Testimonial Section */}
        <section className="absolute w-[1341px] h-[412px] top-[4483px] left-[50px]">
          <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#ffffffcc] text-base tracking-[5.12px] leading-normal">
            OUR CUSTOMERS
          </div>

          <div className="absolute top-[92px] left-4 [font-family:'Coolvetica-Regular',Helvetica] text-[#f6f6f6] text-[118.8px] leading-normal font-normal tracking-[0]">
            &quot;
          </div>

          <div className="absolute w-[750px] top-28 left-[84px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d1d1d1] text-5xl tracking-[0] leading-[52.3px]">
            Understated, but unforgettable. It feels like it was made for me
          </div>

          <ChevronRightIcon className="absolute w-4 h-7 top-[146px] left-[1138px] text-white" />

          <div className="absolute top-[304px] left-[82px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#c3c3c3] text-2xl tracking-[0] leading-9">
            Random Woman
          </div>

          <div className="absolute top-[352px] left-[84px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-neutral-600 text-base tracking-[0] leading-6">
            NY, USA
          </div>

          <img
            className="absolute w-[126px] h-[126px] top-[97px] left-[1205px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mb91ufd8UrIPIa/img/ellipse-3.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[253px] left-[1233px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mb91ufd8UrIPIa/img/ellipse-4.png"
          />

          <img
            className="absolute w-[69px] h-[69px] top-[343px] left-[1233px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mb91ufd8UrIPIa/img/ellipse-5.png"
          />
        </section>

        <Separator className="absolute w-[1342px] top-[4995px] left-[50px]" />

        {/* Footer */}
        <footer className="flex w-[1340px] items-end gap-6 p-6 absolute top-[5067px] left-[50px] bg-[#090808]">
          <div className="inline-flex flex-col items-start gap-[67px] relative flex-[0_0_auto]">
            <div className="gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-[32px] tracking-[-1.28px] leading-8 whitespace-nowrap">
                Eclypse
              </div>
              <img
                className="relative w-[7.07px] h-[7.07px] mt-[-0.62px] mr-[-0.62px]"
                alt="Vector"
                src="https://c.animaapp.com/mb91ufd8UrIPIa/img/vector-3.svg"
              />
            </div>

            <nav className="flex-col gap-1 inline-flex items-start relative flex-[0_0_auto]">
              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <React.Fragment key={link.id}>
                    <div className="[font-family:'Neue_Montreal-Medium',Helvetica] text-sm tracking-[0] leading-[19.6px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
                      {link.label}
                    </div>
                    {index < 2 && (
                      <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Degular_Demo-Regular',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                        /
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                  {footerLinks[3].label}
                </div>
                <div className="relative w-fit mt-[-1.00px] opacity-40 [font-family:'Inter',Helvetica] text-[#d3d5d8] text-sm leading-[19.6px] whitespace-nowrap font-normal tracking-[0]">
                  /
                </div>
              </div>

              <div className="gap-4 inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                  {footerLinks[4].label}
                </div>
              </div>
            </nav>
          </div>

          <div className="flex flex-col items-start justify-end gap-8 relative flex-1 self-stretch grow">
            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="opacity-60 [font-family:'Inter',Helvetica] text-[10px] tracking-[1.50px] leading-[13px] relative w-fit mt-[-1.00px] font-medium text-[#d3d5d8] whitespace-nowrap">
                CONTACT
              </div>
              <div className="relative w-fit [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#d3d5d8] text-xl tracking-[-0.40px] leading-[24.0px] whitespace-nowrap">
                +91 123-456-7890
              </div>
            </div>

            <div className="flex-col gap-2 inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-[#d3d5d8] text-[10px] tracking-[1.50px] leading-[13px] whitespace-nowrap">
                EMAIL
              </div>
              <div className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#d3d5d8] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                eclypse@gmail.com
              </div>
            </div>
          </div>

          <div className="relative flex-1 self-stretch grow" />

          <div className="flex flex-col items-end justify-between relative flex-1 self-stretch grow">
            <div className="relative w-10 h-10 bg-white rounded-[20px] flex items-center justify-center">
              <img
                className="w-[13px] h-[15px]"
                alt="Vector"
                src="https://c.animaapp.com/mb91ufd8UrIPIa/img/vector-2.svg"
              />
            </div>

            <div className="relative w-fit opacity-60 [font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px] whitespace-nowrap">
              <span className="[font-family:'Neue_Machina-Regular',Helvetica] font-normal text-[#d3d5d8] text-[10px] tracking-[0] leading-[13px]">
                ©
              </span>
              <span className="[font-family:'Degular_Demo-Medium',Helvetica] font-medium">
                {" "}
                Eclypse 2025
              </span>
            </div>
          </div>
        </footer>

        {/* Fixed Header */}
        <img
          className="fixed w-[1440px] h-[75px] top-0 left-0"
          alt="Group"
          src="https://c.animaapp.com/mb91ufd8UrIPIa/img/group-35.png"
        />

        {/* Buy Button */}
        <Button className="fixed top-3 left-[1278px] bg-white rounded-[8.71px] px-[38.69px] py-[14.51px]" onClick={() => navigate(`/shipping-address/1`, { state: { user: MOCK_USER } })}>
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] text-black text-[19.3px] tracking-[-0.39px] leading-normal font-medium">
            Buy
          </span>
        </Button>
      </div>
    </div>
  );
};
