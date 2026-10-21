import { Capacitor } from "@capacitor/core";
import { BleClient } from "@capacitor-community/bluetooth-le";

export interface NearbyBluetoothDevice {
  deviceId: string;
  name?: string;
}

// 네이티브 앱에서만 동작함(웹에서는 플랫폼 제약으로 사용 안 함).
// Android 네이티브 "주변 기기 선택" 다이얼로그를 띄워서 사용자가 직접 고르게 함 -
// 이게 안드로이드가 허용하는 한도 내에서 앱이 할 수 있는 최대치고, 실제 OS
// 페어링이나 삼성 헬스 알림 미러링 설정까지 자동으로 해주는 건 아님.
export async function pickNearbyBluetoothDevice(): Promise<NearbyBluetoothDevice | null> {
  if (!Capacitor.isNativePlatform()) return null;

  try {
    await BleClient.initialize();
    const device = await BleClient.requestDevice({});
    return { deviceId: device.deviceId, name: device.name };
  } catch {
    // 사용자가 취소했거나, 권한이 없거나, 주변에 기기가 없는 경우
    return null;
  }
}
