<template>
  <Card shadow @mouseover.native="isDisplayDate=false" @mouseout.native="isDisplayDate=true">
    <p slot="title" style="line-height:16px">
      <Row>
        <Col span="20">
          <div :title="notice.sender.file">
            <span style="display:inline-block;max-width:270px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{notice.sender.file}}&nbsp;</span>
            <Badge v-if="notice.count > 1" :count="notice.count" class-name="notice-badge-gray" ></Badge>
          </div>
        </Col>
        <Col span="4" align="right">
          <div v-if="isDisplayDate">
            <p style="font-weight:400;font-size:12px">
              {{timestampToTime(notice.timestamp)}}
            </p>
          </div>
          <div v-else>
            <a><Icon type="md-close" @click="deleteNotice(notice.key)"/></a>
          </div>
        </Col>
      </Row>
    </p>
    <p style="word-break:break-all">{{notice.message}}</p>
    <Row>
      <Col span="20">
        <p>
          <b><a href="#" @click="jump(notice)">Create new issue</a></b>
          &nbsp;
        </p>
      </Col>
      <Col span="4" align="right">
        <a href="#" @click="changeNoticeStatusToTrue(notice)" title="Remind me again">
          <Icon type="ios-eye" style="font-size:16px"/>
        </a>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  name: "noticeMessage",
  props: ["notice"],
  data() {
    return {
      isDisplayDate: true,
      jumpToUrl: null,
      jumpToName: null,
      messageCardOffset: [5, 4],
    };
  },
  methods: {
    timestampToTime(timeStamp){
      let date = new Date(timeStamp * 1000)
      let hour = date.getHours() + ':'
      let minute = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':'
      let second = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds())
      return hour + minute + second
    },
    deleteNotice(noticeKey){
      this.$store.dispatch('deleteNotRemind', noticeKey)
    },
    jump(notice) {
      // TODO: support select manifest
      // store.state.manifest[0]: only one manifest are supported in v1.0
      for(const menuItem of this.$store.state.menu){
        if (menuItem['params'] && this.$store.state.manifest[0] === menuItem['params']['name']){
          this.$store.commit('setActiveName', menuItem.title)
          this.jumpToUrl = menuItem.params.src
          this.jumpToName = menuItem.params.name
          break
        }
      }
      this.$store.commit('plugin/setSrc', this.jumpToUrl)
      this.$router.push({name:'plugin-view', params:{name:this.jumpToName}})
      this.$store.dispatch("createIssue", notice)
      this.$store.dispatch('deleteNotRemind', notice.key)
    },
    changeNoticeStatusToTrue(notice) {
      this.$store.dispatch('updateNoticeStatus', {
        key:notice.key,
        status:true
      })
    }
  }
}
</script>

<style>
.ivu-card > .ivu-card-head{
  padding: 5px 5px 3px 5px;
  font-size: 12px;
}
.ivu-card > .ivu-card-body{
  padding: 5px 5px 5px 8px;
  font-size: 12px;
}
</style>
