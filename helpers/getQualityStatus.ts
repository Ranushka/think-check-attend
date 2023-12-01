export function getQualityStatus(score: number) {
  if (score >= 85) {
    return {
      name: 'Minimal Risk',
      message: 'coudos Quality seems to be better, still be vigelent',
      color: '#006400',
    }
  } else if (score >= 65) {
    return {
      name: 'Low Risk',
      message: 'Questionable quality, ok but not much',
      color: '#80800e',
    }
  } else if (score >= 45) {
    return {
      name: 'Moderate Risk',
      message: 'Promising low-quality no good nor bad, so it is bad',
      color: '#CCCC00',
    }
  } else if (score >= 25) {
    return {
      name: 'High Risk',
      message: 'Low-quality stuff, dont do it! dont do it!',
      color: '#DE4007',
    }
  } else {
    return {
      name: 'Critical Risk',
      message: 'High risk, maybe first confarance or just bad',
      color: '#B22222',
    }
  }
}
