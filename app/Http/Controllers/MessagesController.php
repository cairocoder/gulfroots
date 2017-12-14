<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Nahid\Talk\Facades\Talk;
use Auth;
use View;


class MessagesController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
      $this->middleware('talk');
  }
  /**
     * Show all of the message threads to the user.
     *
     * @return mixed
     */
    public function index()
    {
      $inboxes = Talk::getInbox();
      return view('users.messages', compact('inboxes'));
    }
      /**
       * Shows a message thread.
       *
       * @param $id
       * @return mixed
       */
      public function showAllMessages($conversationId)
      {
        $conversations = Talk::getConversationsById($conversationId);
        $messages = $conversations->messages;
        $withUser = $conversations->withUser;
        $allMessages = ['messages'=>$messages, 'withUser'=>$withUser];
        // dd(json_encode($allMessages));
        return json_encode($allMessages);
      }
      /**
       * Creates a new message thread.
       *
       * @return mixed
       */
      public function create()
      {

      }
      /**
       * Stores a new message thread.
       *
       * @return mixed
       */
      public function store()
      {

      }
      
      public function SendMessage(Request $request)
      {
        // dd($request);
        $body   = $request->input('message-data');
        $userId = $request->input('_id');
        if ($conversationId = Talk::isConversationExists($userId)) {
          Talk::sendMessage($conversationId, $body);
          return back();
        } else {
          Talk::sendMessageByUserId($userId, $body);
          return back();
        }
      }

      public function DeleteMessage(Request $request, $id)
      {

      }
}
