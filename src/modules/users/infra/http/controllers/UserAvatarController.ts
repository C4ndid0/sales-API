import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';

import UpdateUserAvatarService from '../../../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({
      user_id: req.user.id,

      avatarFilename: req.file?.filename as string,
    });

    return res.json(instanceToInstance(user));
  }
}
