import React from "react";

function Contact() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236886.31526044934!2d-102.57905201328124!3d21.921143200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eda750afa225%3A0x101e5b693f0a1bc0!2sUniversidad%20Panamericana!5e0!3m2!1ses!2smx!4v1684359677949!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>Informe</div>
    </div>
  );
}

export default Contact;
