const Lcation = () => {
  return ( 
    <section
    id="location"
    className="px-3 sm:px-0 py-12 text-start sm:py-20"
    >
      <div className="container sm:px-12 mx-auto text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">كيفية الوصول إلينا؟</h2>
        <p className="sm:text-lg md:text-xl">موقعنا الجغرافـي على خرائط جوجل</p>
      </div>
      <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.515279628229!2d40.39413247612096!3d21.211406180484076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98f99464c5b7f%3A0x92898cab4f67dde6!2z2YXZhtiq2KzYuSDYo9ix2KfYptmDINmE2YTZgdmE2YQg2KfZhNmB2YbYr9mC2YrYqSDYp9mE2YHYp9iu2LHYqQ!5e0!3m2!1sen!2seg!4v1682842447359!5m2!1sen!2seg"
        className="w-full"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Araaek Location"
        ></iframe>
      </div>
      </section>
  );
}

export default Lcation;