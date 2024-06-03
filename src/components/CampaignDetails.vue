<template>
  <div class="row justify-between utitlity-bar">
    <div class="row">
      <q-tabs v-model="tab" narrow-indicator class="custom-tab">
        <q-tab name="campaigns" label="All Campaigns (24)" />
      </q-tabs>
    </div>
    <div class="row items-center">
      <q-input
        outlined
        v-model="searchQuery"
        placeholder="Search Campaigns"
        class="q-mb-md custom-search q-mx-md"
        style="height: 36px"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-btn
        label="+ Add Campaign"
        text-color="white"
        class="cursor-pointer custom-primary-btn q-mx-md"
      />
    </div>
  </div>
  <div class="q-pa-md">
    <q-table
      :rows="filteredCampaigns"
      :columns="columns"
      row-key="id"
      flat
      hide-pagination
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:header="props">
        <q-tr :props="props" class="custom-header-row">
          <q-th auto-width class="custom-cell-padding">
            <q-checkbox
              v-model="allSelected"
              class="custom-checkbox"
              @update:model-value="toggleSelectAll"
            />
          </q-th>
          <q-th
            class="custom-cell-padding"
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td class="custom-cell-padding" auto-width>
            <q-checkbox class="custom-checkbox" v-model="props.row.selected" />
          </q-td>
          <q-td class="custom-cell-padding custom-left-padding">
            <div class="row items-center">
              <q-circular-progress
                show-value
                font-size="12px"
                :value="props.row.progress"
                size="50px"
                :thickness="0.22"
                :color="props.row.status"
                track-color="grey-3"
                class="campaign-progress"
              >
                <span v-if="props.row.progress != null"
                  >{{ props.row.progress }}%</span
                >
                <q-icon
                  v-else
                  size="sm"
                  color="grey-outline"
                  :name="statusIconMap[props.row.status]"
                ></q-icon>
              </q-circular-progress>
              <div class="col q-ml-md">
                <div class="flex felx-center">
                  <span class="campaign-name font-color-primary">{{
                    props.row.name
                  }}</span>
                  <img
                    class="q-ml-sm cursor-pointer"
                    src="../../public/assets/open_link.svg"
                  />
                </div>
                <div class="row items-center campaign-text light-grey-text">
                  <q-icon
                    name="fiber_manual_record"
                    class="font-size-10"
                    :color="props.row.status"
                    size="xs"
                  ></q-icon>
                  <span class="q-ml-xs">
                    {{ props?.row?.status }} on
                    {{ props?.row?.lastUpdateDate }} |
                    {{ props?.row?.sequenceCount }} Sequences
                  </span>
                </div>
              </div>
            </div>
          </q-td>
          <q-td class="custom-cell-padding">
            <div class="row">
              <MetricComponent
                v-for="(metric, index) in props?.row?.metrics"
                :key="index"
                :metric="metric"
                :status="props?.row?.status"
              ></MetricComponent>
            </div>
          </q-td>
          <q-td auto-width>
            <img class="curos-pointer" src="../../public/assets/actions.svg" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import MetricComponent from "./MetricComponent.vue";
import { columns } from "../data/constant.js";
export default {
  components: {
    MetricComponent,
  },
  data() {
    return {
      tab: "campaigns",
      statusIconMap: {
        Paused: "pause_circle_outline",
        Drafted: "drive_file_rename_outline",
        Stopped: "do_disturb",
      },
      searchQuery: "",
      allSelected: false,
      selected: [],
      columns: columns, // table columns
      campaigns: [
        {
          selected: false,
          name: "Random Campagin",
          status: "Sent",
          lastUpdateDate: "13 Apr 2023",
          sequenceCount: 5,
          progress: 15,
          metrics: [
            {
              label: "Sent",
              count: 400,
              percent: null,
              isError: false,
            },
            {
              label: "Opened",
              count: 250,
              percent: 12,
              isError: false,
            },
            {
              label: "Clicked",
              count: 100,
              percent: 12,
              isError: false,
            },
            {
              label: "Replied",
              count: 25,
              percent: 12,
              isError: false,
            },
            {
              label: "Positive Reply",
              count: 10,
              percent: 12,
              isError: false,
            },
          ],
        },
        {
          selected: false,
          name: "Name Campagin",
          status: "Stopped",
          lastUpdateDate: "13 Apr 2023",
          sequenceCount: 5,
          progress: null,
          metrics: [
            {
              label: "Sent",
              count: 350,
              percent: null,
              isError: false,
            },
            {
              label: "Opened",
              count: 175,
              percent: 12,
              isError: false,
            },
            {
              label: "Clicked",
              count: 100,
              percent: 12,
              isError: false,
            },
            {
              label: "Replied",
              count: 75,
              percent: 12,
              isError: false,
            },
            {
              label: "Positive Reply",
              count: 60,
              percent: 12,
              isError: false,
            },
          ],
        },
        {
          selected: false,
          name: "Search Campagin",
          status: "Paused",
          lastUpdateDate: "13 Apr 2023",
          sequenceCount: 5,
          progress: 50,
          metrics: [
            {
              label: "Sent",
              count: 100,
              percent: null,
              isError: false,
            },
            {
              label: "Opened",
              count: 95,
              percent: 12,
              isError: false,
            },
            {
              label: "Clicked",
              count: 66,
              percent: 12,
              isError: false,
            },
            {
              label: "Replied",
              count: 54,
              percent: 12,
              isError: false,
            },
            {
              label: "Positive Reply",
              count: 42,
              percent: 12,
              isError: false,
            },
          ],
        },
        {
          selected: false,
          name: "Testing Campaign",
          status: "Drafted",
          lastUpdateDate: "13 Apr 2023",
          sequenceCount: 5,
          progress: null,
          metrics: [
            {
              label: "Sent",
              count: 400,
              percent: null,
              isError: true,
            },
            {
              label: "Opened",
              count: 400,
              percent: 12,
              isError: true,
            },
            {
              label: "Clicked",
              count: 400,
              percent: 12,
              isError: true,
            },
            {
              label: "Replied",
              count: 400,
              percent: 12,
              isError: true,
            },
            {
              label: "Positive Reply",
              count: 400,
              percent: 12,
              isError: false,
            },
          ],
        },
      ],
    };
  },
  watch: {
    campaigns: {
      handler() {
        this.checkAllSelected();
      },
      deep: true,
    },
  },
  computed: {
    filteredCampaigns() {
      return this.campaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleSelectAll(value) {
      this.filteredCampaigns.forEach((campaign) => {
        campaign.selected = value;
      });
      this.allSelected = value;
    },
    updateSelectAll() {
      this.checkAllSelected();
    },
    checkAllSelected() {
      this.allSelected = this.campaigns.every((campaign) => campaign.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
.campaign-name {
  font-size: 15px;
  font-weight: 700;
}
.campaign-text {
  font-size: 14px;
  font-weight: 400;
}
.campaign-progress {
  height: 50px;
  width: 50px;
}
.utitlity-bar {
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e1e3ef;
}
</style>
