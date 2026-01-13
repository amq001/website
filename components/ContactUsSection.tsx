import Link from "next/link";
import Button from "./Button";
import HeadingComponent from "./HeadingComponent";

const ContactUsSection = () => {
  return (
    <div>

    <section className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#86a6db_150%)] min-h-screen w-full flex flex-col gap-12 items-center justify-center rounded-b-[30px] mdrounded-b-[50px]">
      <HeadingComponent
        heading="Have a Project in Mind?"
        description="Let's Collaborate to Bring Your Vision to Life"
        variant="secondary"
        textCentered={true}
      />
      <Link target="blank" href={"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oSh5ktNL5jQ-Exo-gwAn-ZVy9bsjmzxKEdBDbxMlnQiiiETJCdcowfsTRzUswmaOSZzjsiS6T"}>
      <Button variant="bordered">Book a Call</Button>
      </Link>
    </section>
        </div>
  );
};

export default ContactUsSection;
