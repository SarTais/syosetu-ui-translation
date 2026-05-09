import { getUiText } from '../i18n/current';
import type { TranslationKey } from '../i18n/source/translationKeys';

const titleFragments: Array<[string, TranslationKey]> = [
  ['小説家になろう', 'navigation.narou'],
  ['小説を読もう！', 'navigation.yomou'],
  ['みんなのための小説投稿サイト', 'footer.siteOutline'],
  ['ログイン', 'account.login'],
  ['閲覧履歴', 'search.history'],
  ['縦書きPDFダウンロード', 'novelAction.verticalPdfDownload'],
  ['縦書きPDF作成', 'novelAction.verticalPdfCreate'],
  ['感想一覧', 'novelInfo.commentList'],
  ['イチオシレビュー一覧', 'novelInfo.reviewList'],
  ['作品情報', 'novelAction.info'],
  ['ユーザ登録[メール認証送信完了]', 'registration.emailVerificationSentTitle'],
  ['ユーザ登録[メール認証]', 'registration.emailVerificationTitle'],
  ['ユーザ登録[本登録]', 'registration.fullRegistrationTitle'],
  ['ユーザ登録[確認]', 'registration.confirmationTitle'],
  ['ユーザ登録[完了]', 'registration.completeTitle'],
];

export function translateTitle(): void {
  const current = document.title;
  if (!current) {
    return;
  }

  const translated = titleFragments.reduce((nextTitle, [source, key]) => {
    const replacement = getUiText(key, source);
    return nextTitle.split(source).join(replacement);
  }, current);

  if (document.title !== translated) {
    document.title = translated;
  }
}
