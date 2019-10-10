class TwitchService {

  private _url: string = 'https://api.twitch.tv/helix';
  private _clientId: string = 'tbr05r7ictx1fditg6mjpn1pdlpup5';
  private _topGames: string = '/games/top/';
  private _Streams: string = '/streams?first=100';

  constructor() {

  }

  async GetTopGames() {

    let ajaxsettings: JQueryAjaxSettings = {
      url: this._url + this._topGames,
      contentType: "application/json",
      type: "GET",
      data: JSON.stringify(''),
      processData: false,
      headers: {
        "Client-ID": this._clientId,
      }
    };

    return await Promise.resolve($.ajax(ajaxsettings));
  }

  async GetStreams(id: string) {

    let ajaxsettings: JQueryAjaxSettings = {
      url: this._url + this._Streams + '&game_id=' + id,
      contentType: "application/json",
      type: "GET",
      data: JSON.stringify(''),
      processData: false,
      headers: {
        "Client-ID": this._clientId,
      }
    };

    return await Promise.resolve($.ajax(ajaxsettings));
  }
}