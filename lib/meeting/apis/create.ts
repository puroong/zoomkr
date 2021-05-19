import axios from '../../core/axios';

function createMeetingPath(payload: CreateMeetingParam) {
  return `/users/${payload.userId}/meetings`;
}

export async function createMeeting(payload: CreateMeetingPayload) {
  const { param, body, accessToken } = payload;
  const path = createMeetingPath(param);

  try {
    const { data } = await axios.post(path, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
}

export interface CreateMeetingParam {
  userId: string;
}

export enum MeetingType {
  INSTANT_MEETING = 1,
  SCHEDULED_MEETING = 2,
  RECURRING_MEETING_WITH_NO_FIXED_TIME = 3,
  RECURRING_MEETING_WITH_FIXED_TIME = 8,
}

export interface TrackingField {
  form: string;
  value?: string;
}

export enum RecurrenceType {
  DAILY = 1,
  WEEKLY = 2,
  MONTHLY = 3,
}

export enum WeeklyDay {
  SUNDAY = 1,
  MONDAY = 2,
  TUESDAY = 3,
  WEDNESDAY = 4,
  THURSDAY = 5,
  FRIDAY = 6,
  SATURDAY = 7,
}

class WeeklyDaysVo {
  private days: WeeklyDay[];

  constructor(days: WeeklyDay[]) {
    this.days = days;
  }

  toString(): WeeklyDays {
    return this.days.join(',');
  }
}

export type WeeklyDays = string;

export enum MonthlyWeek {
  LAST_WEEEK_OF_MONTH = -1,
  FIRST_WEEEK_OF_MONTH = 1,
  SECOND_WEEEK_OF_MONTH = 2,
  THIRD_WEEEK_OF_MONTH = 3,
  FOURTH_WEEEK_OF_MONTH = 4,
}

export interface Recurrence {
  type: RecurrenceType;

  repeat_interval?: number;

  weekly_days?: WeeklyDays;

  monthly_day?: number;

  monthly_week?: MonthlyWeek;

  monthly_week_day?: WeeklyDay;

  end_times?: number;

  end_date_time?: string;
}

export enum JoinBeforeHostTime {
  ANYTIME = 0,
  FIVE_MINUTES_BEFORE_START_TIME = 5,
  TEN_MINUTES_BEFORE_START_TIME = 10,
}

export enum ApprovalType {
  AUTOMATIC = 0,
  MANUAL = 1,
  NO_REGISTRATION_REQUIRED = 2,
}

export enum RegistrationType {
  REGISTER_ONCE_ATTEND_ANY_OCCURENCE = 1,
  REGISTER_EACH_OCCURENCE = 2,
  REGISTER_ONCE_AND_CHOOSE_OCCURENCE = 3,
}

export enum Audio {
  BOTH = 'both',
  TELEPHONY = 'telephony',
  VOIP = 'voip',
}

export enum AutoRecording {
  LOCAL = 'local',
  CLOUD = 'cloud',
  NONE = 'none',
}

export interface Room {
  name?: string;

  pariticipants?: string[];
}

export interface BreakoutRoom {
  enable?: boolean;

  rooms?: Room[];
}

export interface Interpreter {
  email?: string;

  languages?: string;
}

export interface LanguageInterpretation {
  enable?: boolean;

  interpreters?: Interpreter[];
}

export enum EncryptionType {
  ENHANCED_ENCRYPTION = 'enhanced_encryption',
  E2EE = 'e2ee',
}

export enum Method {
  APPROVE = 'approve',
  DENY = 'deny',
}

export interface ApprovedOrDeniedCountriesOrRegions {
  enable?: boolean;

  method?: Method;

  approved_list?: string[];

  denied_list?: string[];
}
export interface Setting {
  host_video?: boolean;

  participant_video?: boolean;

  cn_meeting?: boolean;

  in_meeting?: boolean;

  join_before_host?: boolean;

  jbh_time?: JoinBeforeHostTime;

  mute_upon_entry?: boolean;

  watermark?: boolean;

  use_pmi?: boolean;

  approval_type?: ApprovalType;

  registration_type?: RegistrationType;

  audio?: Audio;

  auto_recording?: AutoRecording;

  alternative_hosts?: string;

  close_registration?: boolean;

  waiting_room?: boolean;

  global_dial_in_countries?: string[];

  contact_name?: string;

  contact_email?: string;

  registrants_email_notification?: boolean;

  meeting_authentication?: boolean;

  authentication_options?: string;

  authentication_domains?: string;

  additional_data_center_regions?: string[];

  breakout_room?: BreakoutRoom;

  language_interpretation?: LanguageInterpretation;

  show_share_button?: boolean;

  allow_multiple_devices?: boolean;

  encryption_type?: EncryptionType;

  approved_or_denied_countries_or_regions?: ApprovedOrDeniedCountriesOrRegions;

  alternative_hosts_email_notification?: boolean;
}

export interface CreateMeetingRequestBody {
  topic?: string;

  type?: MeetingType;

  start_time?: string;

  duration?: number;

  schedule_for?: string;

  timezone?: string;

  password?: string;

  agenda?: string;

  tracking_fields?: TrackingField[];

  recurrence?: Recurrence;

  settings: Setting;

  template_id?: string;
}

export interface CreateMeetingPayload {
  param: CreateMeetingParam;

  body: CreateMeetingRequestBody;

  accessToken: string;
}
