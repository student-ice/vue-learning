<script setup>
import { useUserStore } from "@/store/index.js";
import { ArrowDown, Fold, FullScreen, Refresh } from "@element-plus/icons-vue";
import { useFullscreen } from "@vueuse/core";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const { toggle, isFullscreen } = useFullscreen();
const userStore = useUserStore();
const router = useRouter();

const refresh = () => {
  location.reload();
};

const handleCommand = async (res) => {
  if (res === "editPassword"){
    dialogEditPassword.value = true
  }
  if (res === "logout"){
    const res = await ElMessageBox.confirm(
      "是否退出登录",
      "注意",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }
    ).catch(err => {
      return err
    })
    console.log(res);

    if(res === "confirm") {
      // 用户单击了确定按钮
      // 删除token
      window.sessionStorage.removeItem("token")
      // 删除store 中的用户信息
      userStore.setUserInfo({})
      router.push("/login")
    }
  }
}

const dialogEditPassword = ref(false)

const ruleFormEdit = reactive({
  oldpassword: '',
  password: '',
  repassword: ''
})

const rulesEdit = reactive({
  oldpassword: [{ required: true, message: '请输入原始密码', trigger: 'blur' }],
  password: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  repassword: [{ required: true, message: '请再次输入新密码', trigger: 'blur' }],
})

const ruleFormRefEdit = ref(null)

const editPasswordHandle = () => {
  dialogEditPassword.value = false
}

</script>

<template>
  <div class="header">
    <span class="logo">
      商城后台管理系统
    </span>
    <el-icon class="icon">
      <Fold />
    </el-icon>
    <div class="f_right">
      <el-tooltip effect="dark" placement="bottom" content="刷新">
        <el-icon class="icon">
          <Refresh @click="refresh" />
        </el-icon>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom" :content="isFullscreen ? '退出全屏' : '全屏'">
        <el-icon class="icon">
          <FullScreen @click="toggle" />
        </el-icon>
      </el-tooltip>
      <el-dropdown @command="handleCommand">
        <span>
          <el-avatar :size="30" :src="userStore.userInfo.avatar" />
          {{ userStore.userInfo.username }}
          <el-icon class="el-icon--right" style="margin-left: 10px">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="editPassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-dialog v-model="dialogEditPassword" title="修改密码" width="40%">
      <el-form ref="ruleFormRefEdit" :model="ruleFormEdit" :rules="rulesEdit" label-width="80px">
        <el-form-item label="原密码" prop="oldpassword">
          <el-input v-model="ruleFormEdit.oldpassword" />
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input v-model="ruleFormEdit.password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input v-model="ruleFormEdit.repassword" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogEditPassword = false">取消</el-button>
          <el-button type="primary" @click="editPasswordHandle">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  color: #fff;
  align-items: center;

  .f_right {
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 20px;

    .el-dropdown {
      margin-left: 20px;
      color: #fff;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;

        .el-avatar {
          margin-right: 10px;
        }
      }
    }
  }

  .logo {
    font-size: 18px;
    padding-right: 16px;
  }

  .icon {
    width: 30px;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }

}
</style>