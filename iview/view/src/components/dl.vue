<template>
	<div class="main">
		<div class="img">
			<span class="zy_1">手机号码登录</span>
			<span class="zy_2">密码登录</span>
		</div>
		<form action="#" method="post">
			<div class="in_3">
				<input type="text" name="username" placeholder="请输入手机号" v-model="userName" required pattern="^1(3|5|8)\d{9}$"><br>
				<input type="password" name="password" placeholder="请输入新密码" v-model="password" required pattern="^[a-zA-Z0-9]{6,16}$"><br>
			</div>
			<div class="in_31">
				<a href="javascript:;" @click="addUser">登录</a>
			</div>
			<!--<input type="submit" @click="addUser()" value="点击" />-->
		</form>
		<div class="in_6">注册/登录即代表同意<span>《贝壳隐私政策》</span>及<span>《贝壳用户服务协议》</span></div>
	</div>
</template>
<script>
	//	export default {
	//		data() {
	//			return {
	//				userName: '',
	//				password: ''
	//			}
	//		},
	//		methods: {
	//			addUser() {
	//				this.$http.post('/api/user/addUser', {
	//					username: this.userName,
	//					password: this.password
	//				}, {}).then((response) => {
	//					console.log(response);
	//				})
	//			}
	//		}
	//	}
</script>
<style scoped="scoped">
	.in_1 {
		padding: 24px;
		display: flex;
	}
	
	.in_11 img {
		width: 35px;
	}
	
	.in_12 {
		font-size: 30px;
		padding: 0 250px;
	}
	
	.in_13 {
		color: #9399a5;
		font-size: 28px;
		line-height: 32px;
	}
	
	.in_3 {
		position: relative;
		margin: 0 56px 50px 56px;
	}
	
	.in_3 button {
		position: absolute;
		right: 25px;
		top: 35px;
		border: 0;
		background: #FFFFFF;
		font-size: 27px;
		color: #9ea3ae;
	}
	
	.in_3 input {
		border-top: 0;
		border-left: 0;
		border-right: 0;
		line-height: 106px;
		padding-bottom: 6px;
		font-size: 27px;
		width: 636px;
	}
	
	.in_31 a {
		color: #FFFFFF;
		font-size: 30px;
		padding: 28px 288px;
		background: #008aff;
	}
	
	a {
		color: #2C3E50;
		text-decoration: blink;
	}
	
	.in_6 {
		margin-top: 96px;
		font-size: 22px;
		color: #d0d4d7;
	}
	
	.in_6 span {
		text-decoration: underline;
	}
	
	.img {
		width: 750px;
		height: 500px;
		float: left;
		background-image: url(../登录/bj.png);
		font-size: 30px;
		color: #FFFFFF;
	}
	
	.zy_1 {
		line-height: 900px;
		float: left;
		margin-left: 98px;
	}
	
	.zy_2 {
		line-height: 900px;
		float: left;
		margin-left: 200px;
	}
	
	.yjq_1 {
		font-size: 30px;
		float: left;
		padding: 10px;
	}
</style>