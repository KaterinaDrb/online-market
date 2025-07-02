import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="text-xl font-light mx-32 my-20 text-justify flex flex-col gap-4">
      <Image
        src="/business-team.jpg"
        alt="business team"
        height={400}
        width={950}
      />
      <p className="text-justify">
        Tech Heim is an innovative online store that offers a diverse selection
        of digital gadgets, available for purchase in both cash and installment
        options. Embodying the motto &quot;Join the digital revolution
        today&quot; the website not only provides a seamless shopping experience
        but also features a captivating blog section filled with insightful
        reviews, articles, and videos about cutting-edge technology and digital
        gadgets. Users can actively engage with the content through comments and
        a question-answer section, fostering a dynamic community of tech
        enthusiasts.
      </p>
      <h1 className="font-medium">Tech Heim Meaning </h1>
      <p>
        The name &quot;Tech Heim&quot; cleverly combines two languages (English
        & German), signifying a home of technology that provides all the
        essential tech products and services, making it a one-stop destination
        for tech-savvy individuals seeking the latest and most exciting gadgets.
      </p>
      <h1 className="font-medium">Some of Tech Heim’s impressive features :</h1>
      <p>
        Diverse digital gadgets for purchase in cash or installments A blog with
        reviews and articles about the latest technology and gadgets User
        comments and Q&A section for community interaction Represents a
        tech-savvy &quot;home &quot; with all necessary technology Easy-to-use
        interface for a great user experience Consistent and visually appealing
        design A hub for tech enthusiasts to connect and share insights Helps
        users make informed purchase decisions
      </p>
    </div>
  );
}
