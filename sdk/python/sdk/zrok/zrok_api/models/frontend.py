# coding: utf-8

"""
    zrok

    zrok client access  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class Frontend(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'int',
        'frontend_token': 'str',
        'share_token': 'str',
        'backend_mode': 'str',
        'bind_address': 'str',
        'description': 'str',
        'z_id': 'str',
        'created_at': 'int',
        'updated_at': 'int'
    }

    attribute_map = {
        'id': 'id',
        'frontend_token': 'frontendToken',
        'share_token': 'shareToken',
        'backend_mode': 'backendMode',
        'bind_address': 'bindAddress',
        'description': 'description',
        'z_id': 'zId',
        'created_at': 'createdAt',
        'updated_at': 'updatedAt'
    }

    def __init__(self, id=None, frontend_token=None, share_token=None, backend_mode=None, bind_address=None, description=None, z_id=None, created_at=None, updated_at=None):  # noqa: E501
        """Frontend - a model defined in Swagger"""  # noqa: E501
        self._id = None
        self._frontend_token = None
        self._share_token = None
        self._backend_mode = None
        self._bind_address = None
        self._description = None
        self._z_id = None
        self._created_at = None
        self._updated_at = None
        self.discriminator = None
        if id is not None:
            self.id = id
        if frontend_token is not None:
            self.frontend_token = frontend_token
        if share_token is not None:
            self.share_token = share_token
        if backend_mode is not None:
            self.backend_mode = backend_mode
        if bind_address is not None:
            self.bind_address = bind_address
        if description is not None:
            self.description = description
        if z_id is not None:
            self.z_id = z_id
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at

    @property
    def id(self):
        """Gets the id of this Frontend.  # noqa: E501


        :return: The id of this Frontend.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Frontend.


        :param id: The id of this Frontend.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def frontend_token(self):
        """Gets the frontend_token of this Frontend.  # noqa: E501


        :return: The frontend_token of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._frontend_token

    @frontend_token.setter
    def frontend_token(self, frontend_token):
        """Sets the frontend_token of this Frontend.


        :param frontend_token: The frontend_token of this Frontend.  # noqa: E501
        :type: str
        """

        self._frontend_token = frontend_token

    @property
    def share_token(self):
        """Gets the share_token of this Frontend.  # noqa: E501


        :return: The share_token of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._share_token

    @share_token.setter
    def share_token(self, share_token):
        """Sets the share_token of this Frontend.


        :param share_token: The share_token of this Frontend.  # noqa: E501
        :type: str
        """

        self._share_token = share_token

    @property
    def backend_mode(self):
        """Gets the backend_mode of this Frontend.  # noqa: E501


        :return: The backend_mode of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._backend_mode

    @backend_mode.setter
    def backend_mode(self, backend_mode):
        """Sets the backend_mode of this Frontend.


        :param backend_mode: The backend_mode of this Frontend.  # noqa: E501
        :type: str
        """

        self._backend_mode = backend_mode

    @property
    def bind_address(self):
        """Gets the bind_address of this Frontend.  # noqa: E501


        :return: The bind_address of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._bind_address

    @bind_address.setter
    def bind_address(self, bind_address):
        """Sets the bind_address of this Frontend.


        :param bind_address: The bind_address of this Frontend.  # noqa: E501
        :type: str
        """

        self._bind_address = bind_address

    @property
    def description(self):
        """Gets the description of this Frontend.  # noqa: E501


        :return: The description of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Frontend.


        :param description: The description of this Frontend.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def z_id(self):
        """Gets the z_id of this Frontend.  # noqa: E501


        :return: The z_id of this Frontend.  # noqa: E501
        :rtype: str
        """
        return self._z_id

    @z_id.setter
    def z_id(self, z_id):
        """Sets the z_id of this Frontend.


        :param z_id: The z_id of this Frontend.  # noqa: E501
        :type: str
        """

        self._z_id = z_id

    @property
    def created_at(self):
        """Gets the created_at of this Frontend.  # noqa: E501


        :return: The created_at of this Frontend.  # noqa: E501
        :rtype: int
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this Frontend.


        :param created_at: The created_at of this Frontend.  # noqa: E501
        :type: int
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this Frontend.  # noqa: E501


        :return: The updated_at of this Frontend.  # noqa: E501
        :rtype: int
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this Frontend.


        :param updated_at: The updated_at of this Frontend.  # noqa: E501
        :type: int
        """

        self._updated_at = updated_at

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(Frontend, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Frontend):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
