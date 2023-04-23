<template>
    <div class="customer-service">
        <div class="chat-container" ref="chatContainer">
            <TransitionGroup name="list" tag="div">
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
            </TransitionGroup>
        </div>
        <div class="input-container">
            <input type="text" class="input" placeholder="请输入内容" v-model="inputValue" @keyup.enter="sendMessage"/>
            <button class="send-btn" @click="sendMessage" :disabled="callFlag">发送</button>
        </div>
    </div>
</template>

<script setup>
import {ref, nextTick} from 'vue'
//输入框内容
const inputValue = ref('');
//聊天框信息列表
const chatData = ref([{
    isUser: false,
    message: '您好，有什么可以帮助您？',
    time: new Date().toLocaleString()
}]);
const chatContainer = ref(null)
//回复状态
const callFlag = ref(false);
const sendMessage = () => {
    //一问一答锁
    if (callFlag.value) {
        return;
    }
    const reqMsg = inputValue.value.trim();
    //清除左右空格
    if (reqMsg === '') {
        return
    }
    //发送消息到聊天框
    const newMessage = {
        isUser: true,
        message: reqMsg,
        time: new Date().toLocaleString()
    }
    chatData.value.push(newMessage)
    //锁
    callFlag.value = true
    //调用ai
    fetch("http://8.219.187.147:9969/call", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({word: reqMsg})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const newMessage1 = {
            isUser: false,
            message: data?.msg,
            time: new Date().toLocaleString()
        }
        chatData.value.push(newMessage1)
    })
    .catch(error => {
        console.error(error)
    }).finally(() => {
        callFlag.value = false
        nextTickChatContainer()
    });
    //清除信息并回到底部
    inputValue.value = ''
    nextTickChatContainer()

}
const nextTickChatContainer = () => {
    nextTick(() => {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    })
}
</script>

<style scoped>
/* 对话弹出动画效果*/
.list-enter-active, .list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
    display: none;
}

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

    &:disabled:hover {
        background-color: #CCCCCC;
        color: #666666;
        cursor: not-allowed;
    }
}

/*按钮变灰*/
.send-btn:disabled {
    background-color: #CCCCCC;
    color: #666666;
    cursor: not-allowed;
}
</style>
