import Button from "./Button";
import HeadingComponent from "./HeadingComponent";

const ContactUsSection = () => {
  return (
    <div className="bg-black">

    <section className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1900d0_100%)] min-h-screen w-full flex flex-col gap-12 items-center bg-black justify-center rounded-b-[50px]">
      <HeadingComponent
        heading="Have a Project in Mind?"
        description="Let's Collaborate to Bring Your Vision to Life"
        variant="secondary"
      />
      <Button variant="bordered">Book a Call</Button>
    </section>  
        </div>
  );
};

export default ContactUsSection;
