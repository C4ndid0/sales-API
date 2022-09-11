interface IMailConfig {
  driver: 'ehterial' | 'ses';
  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ehterial',
  defaults: {
    from: {
      email: 'exemple@exemple.com',
      name: 'John DOe',
    },
  },
} as unknown as IMailConfig;
