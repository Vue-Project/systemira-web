<template>
  <div class="container">
    <div class="contact-page">
      <div class="contact-content">
        <div class="row">
          <div class="col-md-6">
            <div class="conact-info">
              <div class="contact-item">
                <h2 class="mb-60">{{ $t("contact.Contact Us") }}</h2>
                <h5>{{ $t("contact.Call Us") }}</h5>

                <p>
                  {{ $t("contact.Call Us Text") }}
                </p>
                <a href="tel:01029936932">
                  <i class="fas fa-phone-alt"></i>+20 01029936932</a
                >
              </div>
              <div class="contact-item">
                <h5>{{ $t("contact.Email") }}</h5>
                <p>
                  {{ $t("contact.Email Text") }}
                </p>
                <a href="mailto:sales@corptia.com">
                  <i class="far fa-envelope"></i>sales@corptia.com</a
                >
              </div>
              <div class="contact-item">
                <h5>{{ $t("contact.Visit Us") }}</h5>
                <p>
                  {{ $t("contact.Visit Us Text") }}
                </p>
                <a
                  href="https://www.google.com/maps/place/Corptia/@31.4483051,31.6846835,17z/data=!3m1!4b1!4m6!3m5!1s0x14f9e3b26d140a5d:0xc211287f16120a7!8m2!3d31.4483005!4d31.6824948!16s%2Fg%2F11r_f8wch_"
                  target="_blank"
                >
                  <i class="fas fa-map-marker-alt"></i>18 Second District
                  Center, New Damietta, Egypt</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <form
              id="contact-form"
              role="form"
              action="https://formsubmit.co/8b1fa78e70a45e794e8c7e50a3113b00"
              method="POST"
            >
              <div class="form-group">
                <label for="form_name">{{ $t("contact.Client Name") }}</label>
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  class="form-control"
                  required="required"
                  data-error="Firstname is required."
                />
              </div>
              <div class="form-group">
                <label for="form_phone">{{ $t("contact.Client Phone") }}</label>
                <input
                  id="form_phone"
                  type="text"
                  name="phone"
                  class="form-control"
                  required="required"
                  data-error="phone is required."
                />
              </div>
              <div class="form-group">
                <label for="form_email">{{ $t("contact.Client Email") }}</label>
                <input
                  id="form_email"
                  type="text"
                  name="email"
                  class="form-control"
                  required="required"
                  data-error="Email is required."
                />
              </div>
              <div class="form-group">
                <label for="form_massage">{{
                  $t("contact.Client Massage")
                }}</label>
                <textarea
                  id="form_message"
                  name="message"
                  class="form-control"
                  rows="4"
                  required="required"
                  data-error="Please, leave us a message."
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://corptia.com/contact"
              />

              <input
                type="submit"
                class="btn-main"
                :value="$t('contact.Send Message')"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheForm",
  layout: "component",
};
</script>

<style></style>
