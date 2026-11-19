"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { requestNotificationPermission } from "@/services/notifications";

// 네이티브 앱에서만 마운트 시 자동으로 권한을 요청함. 웹 표준 Notification API는
// 브라우저가 "사용자 제스처(클릭 등) 중에만 요청 가능"으로 제한해서, 마운트 시
// 자동 호출하면 콘솔 에러만 찍히고 권한 창도 뜨지 않음 - 웹에서는 설정 페이지의
// "추천 알림" 토글 클릭 시(실제 사용자 제스처) 요청함.
export function NotificationInit() {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      requestNotificationPermission();
    }
  }, []);

  return null;
}
