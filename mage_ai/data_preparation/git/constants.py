import os

DEFAULT_SSH_KEY_DIRECTORY = os.path.expanduser(os.path.join('~', '.ssh'))
DEFAULT_KNOWN_HOSTS_FILE = os.path.join(DEFAULT_SSH_KEY_DIRECTORY, 'known_hosts')

GIT_SSH_PUBLIC_KEY_VAR = 'GIT_SSH_PUBLIC_KEY'
GIT_SSH_PRIVATE_KEY_VAR = 'GIT_SSH_PRIVATE_KEY'
GIT_ACCESS_TOKEN_VAR = 'GIT_ACCESS_TOKEN'
