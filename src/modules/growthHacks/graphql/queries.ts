const commonParams = `
  $pipelineId: String,
  $assignedUserIds: [String],
  $closeDateType: String,
  $search: String,
`;

const commonParamDefs = `
  pipelineId: $pipelineId,
  assignedUserIds: $assignedUserIds,
  closeDateType: $closeDateType,
  search: $search,
`;

const growthHackFields = `
  _id
  name
  priority
  reach
  impact
  confidence
  ease
  scoringType
  assignedUsers {
    _id
    email
    details {
      fullName
      avatar
    }
  }
  voteCount
  modifiedAt
`;

const growthHackDetailFields = `
  _id
  name
  stageId
  pipeline {
    _id
    name
  }
  boardId
  closeDate
  description
  hackStages
  priority
  reach
  impact
  confidence
  ease
  scoringType
  assignedUsers {
    _id
    email
    details {
      fullName
      avatar
    }
  }
  stage {
    probability
    name
  }
  isWatched
  attachments {
    name
    url
    type
    size
  }
  formSubmissions
  formFields {
    _id
    type
    validation
    text
    description
    options
    isRequired
    order
  }
  formId
  voteCount
  votedUsers {
    _id
    details {
      avatar
      fullName
    }
  }
  isVoted
  modifiedAt
  modifiedBy
`;

const growthHacks = `
  query growthHacks(
    $stageId: String,
    $skip: Int,
    $limit: Int,
    $sortField: String,
    $sortDirection: Int,
    $hackStage: [String],
    $priority: [String],
    ${commonParams}
  ) {
    growthHacks(
      stageId: $stageId,
      skip: $skip,
      limit: $limit,
      sortField: $sortField,
      sortDirection: $sortDirection,
      hackStage: $hackStage,
      priority: $priority,
      ${commonParamDefs}
    ) {
      ${growthHackFields}
    }
  }
`;

const growthHacksTotalCount = `
  query growthHacksTotalCount(
    $stageId: String,
    $hackStage: [String],
    $priority: [String],
    ${commonParams}
  ) {
    growthHacksTotalCount(
      stageId: $stageId,
      hackStage: $hackStage,
      priority: $priority,
      ${commonParamDefs}
    )
  }
`;

const growthHacksPriorityMatrix = `
  query growthHacksPriorityMatrix(
    ${commonParams}
  ) {
    growthHacksPriorityMatrix(
      ${commonParamDefs}
    )
  }
`;

const growthHackDetail = `
  query growthHackDetail($_id: String!) {
    growthHackDetail(_id: $_id) {
      ${growthHackDetailFields}
    }
  }
`;

const pipelineDetail = `
  query pipelineDetail($_id: String!) {
    pipelineDetail(_id: $_id) {
      _id
      name
      bgColor
      hackScoringType
    }
  }
`;

export default {
  growthHacks,
  growthHacksPriorityMatrix,
  growthHackDetail,
  growthHacksTotalCount,
  pipelineDetail
};
