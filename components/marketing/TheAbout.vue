<template>
    <section class="common-section">
        <div class="container">
            <div class="row center">
                <div class="col-md-6">
                    <div class="about-text">
                        <h3>{{$t("marketing.Marketing Optional")}}
                        </h3>
                        <p>
                            {{$t("marketing.Marketing Optional Text")}}                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <figure class="about-thumb right">
                        <img src="~/assets/images/marketing-optional.png" alt="Marketing is not optional" />
                    </figure>
                </div>
            </div>
        </div>

    </section>
  

</template>

<script>
export default {
    name: "TheAbout",
    layout: "component",
  
};
</script>

<style>

</style>
