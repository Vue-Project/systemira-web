<template>
	<section class="common-section bg-gray">
		<header class="section-header">
			<div class="container">
				<span>Our Blog</span>
				<h2>Latest News</h2>
			</div>
		</header>
		<div class="container">
			<div class="row">
				<div class="col-md-4" v-for='post in posts' :key="post.id">
					<div class="post-item">
						<figure class="post-thumb">
							<img :src="post.img" alt="Work 1" >
						</figure>
						<h4>{{post.title}}</h4>
						<p>{{post.content}}</p>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
    return {
			posts:[
				{
					id: 0,
					image:'~/assets/images/posts/post-01.png',
					title: 'What is Lorem Ipsum?',
					content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				},
				{
					id: 1,
					image:'~/assets/images/posts/post-02.png',
					title: 'What is Lorem Ipsum?',
					content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				},
				{
					id: 2,
					image:'~/assets/images/posts/post-03.png',
					title: 'What is Lorem Ipsum?',
					content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				}
			]
		}
				
	}

}
</script>

<style>

</style>