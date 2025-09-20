// グローバル変数
let isReporting = false;
let successCount = 0;
let failCount = 0;
let currentProgress = 0;
let totalReports = 0;

// DOM要素を取得
const reportTypeSelect = document.getElementById('reportType');
const userServerGroup = document.getElementById('userServerGroup');
const messageGroup = document.getElementById('messageGroup');
const messageIdGroup = document.getElementById('messageIdGroup');
const reportReasonSelect = document.getElementById('reportReason');
const subReasonGroup = document.getElementById('subReasonGroup');
const subReasonSelect = document.getElementById('subReason');
const reportButton = document.getElementById('reportButton');
const logContainer = document.getElementById('logContainer');

// 通報タイプ変更時のイベントリスナー
reportTypeSelect.addEventListener('change', function() {
    const selectedType = this.value;
    
    if (selectedType === 'message') {
        userServerGroup.style.display = 'none';
        messageGroup.style.display = 'block';
        messageIdGroup.style.display = 'block';
        
        // メッセージ通報のフィールドをrequiredに設定
        document.getElementById('channelId').required = true;
        document.getElementById('messageId').required = true;
        document.getElementById('targetId').required = false;
    } else {
        userServerGroup.style.display = 'block';
        messageGroup.style.display = 'none';
        messageIdGroup.style.display = 'none';
        
        // ユーザー/サーバー通報のフィールドをrequiredに設定
        document.getElementById('channelId').required = false;
        document.getElementById('messageId').required = false;
        document.getElementById('targetId').required = true;
    }
    
    updateReportOptions();
});

// 通報理由変更時のイベントリスナー
reportReasonSelect.addEventListener('change', function() {
    updateSubReasons();
});

// 通報理由のオプションを更新
function updateReportOptions() {
    const reportType = reportTypeSelect.value;
    let data;
    let rootNodeId;
    
    // 通報タイプに応じてデータを選択
    switch (reportType) {
        case 'user':
            data = userReportData;
            rootNodeId = 8; // ユーザー通報のルートノード
            break;
        case 'server':
            data = serverReportData;
            rootNodeId = 0; // サーバー通報のルートノード
            break;
        case 'message':
            data = messageReportData;
            rootNodeId = 3; // メッセージ通報のルートノード
            break;
        default:
            return;
    }
    
    // セレクトボックスをクリア
    reportReasonSelect.innerHTML = '<option value="">通報理由を選択してください</option>';
    subReasonGroup.style.display = 'none';
    
    // ルートノードのサブキーを取得
    const rootNode = data.nodes[rootNodeId];
    if (rootNode && rootNode.subkeys) {
        Object.entries(rootNode.subkeys).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = key;
            reportReasonSelect.appendChild(option);
        });
    }
}

// サブ理由のオプションを更新
function updateSubReasons() {
    const reportType = reportTypeSelect.value;
    const selectedReason = reportReasonSelect.value;
    
    if (!selectedReason) {
        subReasonGroup.style.display = 'none';
        return;
    }
    
    let data;
    switch (reportType) {
        case 'user':
            data = userReportData;
            break;
        case 'server':
            data = serverReportData;
            break;
        case 'message':
            data = messageReportData;
            break;
        default:
            return;
    }
    
    const reasonNode = data.nodes[selectedReason];
    
    if (reasonNode && reasonNode.subkeys) {
        // サブ理由がある場合
        subReasonSelect.innerHTML = '<option value="">詳細理由を選択してください</option>';
        
        Object.entries(reasonNode.subkeys).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = key;
            subReasonSelect.appendChild(option);
        });
        
        subReasonGroup.style.display = 'block';
    } else {
        // サブ理由がない場合
        subReasonGroup.style.display = 'none';
    }
}

// パンくずリスト（breadcrumbs）を生成
function generateBreadcrumbs(reportType, primaryReason, subReason = null) {
    let data;
    let rootNodeId;
    
    switch (reportType) {
        case 'user':
            data = userReportData;
            rootNodeId = 8;
            break;
        case 'server':
            data = serverReportData;
            rootNodeId = 0;
            break;
        case 'message':
            data = messageReportData;
            rootNodeId = 3;
            break;
        default:
            return [];
    }
    
    const breadcrumbs = [rootNodeId];
    
    if (primaryReason) {
        breadcrumbs.push(parseInt(primaryReason));
    }
    
    if (subReason) {
        breadcrumbs.push(parseInt(subReason));
    }
    
    return breadcrumbs;
}

// 通報を送信
async function sendReport(token, reportType, targetId, channelId, messageId, breadcrumbs) {
    const userAgent = generateRandomUserAgent();
    
    let url, payload;
    
    switch (reportType) {
        case 'user':
            url = 'https://discord.com/api/v9/reporting/user';
            payload = {
                version: "1.0",
                variant: "2",
                language: "ja",
                breadcrumbs: breadcrumbs,
                elements: {},
                name: "user",
                user_id: targetId
            };
            break;
        case 'server':
            url = 'https://discord.com/api/v9/reporting/guild';
            payload = {
                version: "1.0",
                variant: "1",
                language: "ja",
                breadcrumbs: breadcrumbs,
                elements: {},
                name: "guild",
                guild_id: targetId
            };
            break;
        case 'message':
            url = 'https://discord.com/api/v9/reporting/message';
            payload = {
                version: "1.0",
                variant: "3",
                language: "ja",
                breadcrumbs: breadcrumbs,
                elements: {},
                name: "message",
                channel_id: channelId,
                message_id: messageId
            };
            break;
        default:
            throw new Error('無効な通報タイプです');
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'X-Super-Properties': btoa(JSON.stringify({
                os: "Mac OS X",
                browser: "Discord Client",
                release_channel: "stable",
                client_version: "1.0.9003",
                os_version: "10.15.7",
                os_arch: "x64",
                system_locale: "ja-JP",
                client_build_number: 69548,
                client_event_source: null
            }))
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
}

// ログを追加
function addLog(message, type = 'info') {
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry log-${type}`;
    logEntry.innerHTML = `
        <span class="log-time">${new Date().toLocaleTimeString()}</span>
        <span class="log-message">${message}</span>
    `;
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight;
}

// 統計を更新
function updateStats() {
    document.getElementById('successCount').textContent = successCount;
    document.getElementById('failCount').textContent = failCount;
    document.getElementById('progress').textContent = `${currentProgress}/${totalReports}`;
    
    const progressPercent = totalReports > 0 ? (currentProgress / totalReports) * 100 : 0;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
}

// バリデーション
function validateInputs() {
    const tokens = document.getElementById('tokens').value.trim();
    const reportType = reportTypeSelect.value;
    const reportAmount = parseInt(document.getElementById('reportAmount').value);
    const primaryReason = reportReasonSelect.value;
    
    if (!tokens) {
        addLog('❌ トークンを入力してください', 'error');
        return false;
    }
    
    if (!reportType) {
        addLog('❌ 通報対象を選択してください', 'error');
        return false;
    }
    
    if (reportType === 'message') {
        const channelId = document.getElementById('channelId').value.trim();
        const messageId = document.getElementById('messageId').value.trim();
        
        if (!channelId || !messageId) {
            addLog('❌ チャンネルIDとメッセージIDを入力してください', 'error');
            return false;
        }
    } else {
        const targetId = document.getElementById('targetId').value.trim();
        if (!targetId) {
            addLog('❌ ターゲットIDを入力してください', 'error');
            return false;
        }
    }
    
    if (!primaryReason) {
        addLog('❌ 通報理由を選択してください', 'error');
        return false;
    }
    
    // サブ理由が表示されている場合はチェック
    if (subReasonGroup.style.display !== 'none') {
        const subReason = subReasonSelect.value;
        if (!subReason) {
            addLog('❌ 詳細理由を選択してください', 'error');
            return false;
        }
    }
    
    if (reportAmount < 1 || reportAmount > 100) {
        addLog('❌ 通報回数は1-100の間で設定してください', 'error');
        return false;
    }
    
    return true;
}

// メイン通報関数
async function startReporting() {
    if (isReporting) {
        addLog('⚠️ 既に通報が進行中です', 'warning');
        return;
    }
    
    if (!validateInputs()) {
        return;
    }
    
    isReporting = true;
    successCount = 0;
    failCount = 0;
    currentProgress = 0;
    
    const tokens = document.getElementById('tokens').value.trim().split('\n').filter(t => t.trim());
    const reportType = reportTypeSelect.value;
    const reportAmount = parseInt(document.getElementById('reportAmount').value);
    const primaryReason = reportReasonSelect.value;
    const subReason = subReasonGroup.style.display !== 'none' ? subReasonSelect.value : null;
    
    let targetId, channelId, messageId;
    
    if (reportType === 'message') {
        channelId = document.getElementById('channelId').value.trim();
        messageId = document.getElementById('messageId').value.trim();
    } else {
        targetId = document.getElementById('targetId').value.trim();
    }
    
    totalReports = tokens.length * reportAmount;
    
    reportButton.disabled = true;
    reportButton.textContent = '通報中...';
    
    const breadcrumbs = generateBreadcrumbs(reportType, primaryReason, subReason);
    
    addLog(`通報を開始します (${totalReports}回)`, 'success');
    addLog(`通報タイプ: ${reportType === 'user' ? 'ユーザー' : reportType === 'server' ? 'サーバー' : 'メッセージ'}`, 'info');
    addLog(`ブレッドクラム: [${breadcrumbs.join(', ')}]`, 'info');
    
    for (let i = 0; i < reportAmount; i++) {
        for (let j = 0; j < tokens.length; j++) {
            if (!isReporting) break;
            
            const token = tokens[j].trim();
            
            try {
                await sendReport(token, reportType, targetId, channelId, messageId, breadcrumbs);
                successCount++;
                addLog(`✅ 通報成功 (トークン ${j + 1})`, 'success');
            } catch (error) {
                failCount++;
                addLog(`❌ 通報失敗 (トークン ${j + 1}): ${error.message}`, 'error');
            }
            
            currentProgress++;
            updateStats();
            
            // レート制限を避けるための遅延
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        if (!isReporting) break;
        
        // 各ラウンド間の遅延
        if (i < reportAmount - 1) {
            addLog(` ${i + 1} 完了。2秒後に次のラウンドを開始...`, 'info');
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    
    isReporting = false;
    reportButton.disabled = false;
    reportButton.textContent = '通報開始';
    
    addLog(`通報完了! 成功: ${successCount}, 失敗: ${failCount}`, 'success');
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    updateReportOptions();
});
