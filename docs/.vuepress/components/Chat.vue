<template>
    <div class="customer-service">
        <div class="chat-container">
            <div class="chat-item" v-for="(item, index) in chatData" :key="index">
                <div class="avatar" v-if="!item.isUser">
                    <img src="/logo/toplogo.svg" alt="客服头像"/>
                </div>
                <div class="chat-bubble" :class="{ 'user-bubble': item.isUser }">
                    <div>
                        {{ item.message }}
                    </div>
                    <div class="chat-time">{{ item.time }}</div>
                </div>
            </div>
        </div>
        <div class="input-container">
            <input type="text" class="input" placeholder="请输入内容" v-model="inputValue" @keyup.enter="sendMessage"/>
            <button class="send-btn" @click="sendMessage">发送</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {notification} from "ant-design-vue";
//输入框内容
const inputValue = ref('');
//聊天框信息列表
const chatData = ref([{
    isUser: false,
    message: '您好，有什么可以帮助您？',
    time: '2021-10-10 10:00:00'
}]);
//回复状态
const callFlag = ref(true);
const sendMessage = () => {
    if (inputValue.value.trim() === '') {
        return
    }
    if (callFlag){
        alert("AI正在整理信息，请稍后再发送消息")
        return;
    }
    callFlag.value = true
    const newMessage = {
        isUser: true,
        message: inputValue.value.trim(),
        time: new Date().toLocaleString()
    }
    chatData.value.push(newMessage)
    inputValue.value = ''
    callFlag.value = false
}
</script>

<style scoped>
.customer-service {
    width: 70vh;
    height: 70vh;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.chat-container {
    height: 80%;
    overflow-y: auto;
    padding: 10px;
}

.chat-item {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
}

.avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}

.chat-bubble {
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    background-color: #f6f6f6;
    font-size: 12px;

    &.user-bubble {
        margin-left: auto;
        background-color: #e1f5fe;
    }
}

.chat-time {
    font-size: 12px;
    margin-left: 10px;
    color: #999;
}


.input-container {
    display: flex;
    align-items: center;
    height: 20%;
    padding: 10px;
}

.input {
    flex: 1;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
}

.send-btn {
    margin-left: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #2196f3;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #0c7cd5;
    }
}
</style>
